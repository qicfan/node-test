/**
 * Created by Dean on 16/3/15.
 */
var xlsx = require("node-xlsx");
var nodejieba = require("nodejieba");
var db = require('./db');
var t = require('./t');
var async = require('async');
var log = t.log;

// 读取excel的内容，然后入库
//var result = nodejieba.cut("安徽省 合肥市 蜀山区 南七街道潜山路和望江路交口向东400米 合肥市望江路少年宫分校梦巴特机器人(230000)");
//console.log(result);

// 将数据入库
db.connect(function () {
    var ly = xlsx.parse('./ro.xlsx');
    var shopCount = ly[0]['data'].length;
    var index = 1;
    async.whilst(
        function () {
            return index <= shopCount;
        },
        function (cba) {
            // 主逻辑，完成后调用cba进行下一次循环
            var shopData = ly[0]['data'][index];
            if (!shopData) {
                index ++;
                return cba();
            }
            var province = shopData[0];
            var city = shopData[1];
            var shopName = shopData[2];
            if (!shopName) {
                index ++;
                return cba();
            }
            var district = '';
            // 处理电话
            //var tel = (shopData[6] + '').replace('/', ',').replace(';', '').replace(/\s/g, ',').replace(/\(([0-9]{3,4})\)/g, '$1-').replace(/[^\u0000-\u00FF]/g, '').replace('--', '-').replace(/^,/g, '').replace(/,{2,9}/g, ',').replace(/,$/g, '');
            //// 如果第四位是逗号，则替换成-
            //if (tel.indexOf(',') == 3) {
            //    // 替换第三位为-
            //    tel = tel.substring(0, 3) + '-' + tel.substring(4, tel.length);
            //}
            var tel = shopData[4];
            if (!tel || tel == 'undefined') {
                tel = '';
            }
            // 处理地址
            var address = (shopData[3] + '').replace(/\-/g, '').replace(/\s/g, '').replace(/\([0-9]*\)/g, '').replace(/：/g, '').replace(/，/g, ',').replace(/；/g, ',').replace(/^,/g, '').replace(/,$/g, '');
            if (province == '上海' || province == '北京' || province == '天津' || province == '重庆') {
                address = address.replace(province + '市', '').replace(province, '');
            } else {
                if (province == city) {
                    address = address.replace(city + '市', '').replace(city, '');
                } else {
                    address = address.replace(province + '省', '').replace(province, '').replace(city + '市', '').replace(city, '');
                }
            }
            var person = '';
            if (!person || person == 'undefined') {
                person = '';
            }
            var email = shopData[5];
            province = province.replace('省', '');
            province = province.replace('市', '');
            if (city) {
                city = city.replace('市', '');
            }
            log(shopName + '=>' + tel + '-' + address + ' ' + province + ' ' + city);
            //db.findEach("SELECT * FROM shop WHERE shop_url = '"+shopUrl+"'", function(row) {
            db.execute("INSERT INTO new_shop (province, city, district, shop_name, address, tel, person, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
                province, city, district, shopName, address, tel, person, email
            ], function () {
                log(shopName + '入库成功');
                index++;
                return cba();
            });
            //}, function(){index ++; return cba()});
        },
        function (err) {
            log(err);
            index ++;
        }
    );
});


