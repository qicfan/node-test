/**
 * Created by Dean on 16/3/18.
 */
var db = require('./db');
var t = require('./t');
var async = require('async');
var nodejieba = require("nodejieba");
var xlsx = require("node-xlsx");
var fs = require('fs');
var log = t.log;
// 将数据入库
var shops = {};
var newShops = [];
var existsShops = {};
var tasks = [
    function(cb){
        db.connect(function () {
            db.findEach("SELECT * FROM new_shop", function(row) {
                // 加入数组中
                if (!shops[row.province]) {
                    shops[row.province] = [];
                }
                if (!shops[row.province][row.city]) {
                    shops[row.province][row.city] = [];
                }
                shops[row.province][row.city].push(row);
            }, function(){
                // 全部完成
                log('所有门店数据已经读取完毕');
                cb();
            });
        });
    },
    function(cb) {
        log('开始进行数据分析');
        // 查询省市下的数据
        // 先判断名称是否重复
        // 名称重复的话判断地址的相似度
        for (var p in shops) {
            // 省份
            for (var c in shops[p]) {
                // 城市
                for (var index in shops[p][c]) {
                    if (existsShops[shops[p][c][index]['id']] == true) {
                        continue;
                    }
                    var cName = shops[p][c][index]['shop_name'];
                    var cAddress = shops[p][c][index]['address'];
                    var cShop = shops[p][c][index];
                    for (var s in shops[p][c]) {
                        if (s == index) {
                            continue;
                        }
                        var nName = shops[p][c][s]['shop_name'];
                        var nAddress = shops[p][c][s]['address'];
                        if (cAddress == nAddress) {
                            log(cName + ' 和 ' + nName + ' 的地址相同: ' + cAddress + ' 判定为重复');
                            // 地址也相同，则判定为重复，合并数据
                            existsShops[shops[p][c][s]['id']] = true;
                            for (key in cShop) {
                                if (!cShop[key] && shops[p][c][s][key]) {
                                    cShop[key] = shops[p][c][s][key];
                                }
                            }
                            continue;
                        }
                        // 如果名称相同，则判定为相似
                        if (cName == nName) {
                            // 判断相似度
                            var cTags = nodejieba.cut(cAddress);
                            var nTags = nodejieba.cut(nAddress);
                            var du = compare(cTags, nTags);
                            if (du >= 80 || (du >= 70 && cAddress.length <= 10)) {
                                // 相似度大于80，判定为重复
                                log(cAddress + ' 和 ' + nAddress + ' 的名称相同，名称: ' + cName + ' 判定为重复，地址相似度:' + du);
                                existsShops[shops[p][c][s]['id']] = true;
                                for (key in cShop) {
                                    if (!cShop[key] && shops[p][c][s][key]) {
                                        cShop[key] = shops[p][c][s][key];
                                    }
                                }
                                continue;
                            }
                            if (du >= 70) {
                                // 相似度大于70，并且地址小于10个字，则判定为相似
                                log(cAddress + ' 和 ' + nAddress + ' 的名称相同，名称: ' + cName + ' 判定为相似，地址相似度:' + du);
                                if (!cShop['shops']) {
                                    cShop['shops'] = '';
                                }
                                cShop['shops'] += shops[p][c][s]['id'] + '---' + shops[p][c][s]['shop_name'] + '---' + shops[p][c][s]['address'] + '---'+du+'\n';
                            }
                        }
                    }
                    if (!cShop['shops']) {
                        cShop['shops'] = '';
                    }
                    newShops.push(cShop);
                }
            }
        }
        log(newShops.length);
        cb();
    },
    function(cb) {
        for (var i in newShops) {
            var conditions = [];
            var params = [];
            var values = [];
            for (var k in newShops[i]) {
                conditions.push(k);
                values.push('?');
                params.push(newShops[i][k]);
            }
            var conditionString = conditions.join(',');
            var valueString = values.join(',');
            db.execute("INSERT INTO final ("+conditionString+") VALUES ("+valueString+")", params, function() {
                log(newShops[i]['shop_name'] + "入库成功");
            });
        }
    }
];
async.series(tasks, function() {});


function compare(x, y) {
    var z = 0;
    var s = x.length + y.length;

    x.sort();
    y.sort();
    var a = x.shift();
    var b = y.shift();

    while(a !== undefined && b !== undefined) {
        if (a === b) {
            z++;
            a = x.shift();
            b = y.shift();
        } else if (a < b) {
            a = x.shift();
        } else if (a > b) {
            b = y.shift();
        }
    }
    return z/s * 200;
}
