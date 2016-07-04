/**
 * Created by Dean on 16/3/18.
 */
var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');
var async = require('async');
var t = require('./t');
var log = t.log;

var request = request.defaults({
    timeout: 10000, headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
        'Connection': 'keep-alive',
        'Cookie': '',
        'Referer': 'http://www.robotedu.org/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
    }
});

db.connect(function () {
    db.findEach("SELECT * FROM new_shop", function (row) {
        getInfo(row);
    }, function (err) {
        // 查询完成，返回
        return log(err + ', complete\n');
    });
});

var getInfo = function (row) {
    var city = row.city;
    var province = row.province;
    var district = row.district;
    var address = row.address;
    // 处理城市
    if (row.province == '上海' || row.province == '北京' || row.province == '重庆' || row.province == '天津' ) {
        if (!city) {return;}
        // 处理市
        city = city.replace(row.province, '').replace('市', '');
        if (city.indexOf('区')) {
            // 将区放到区县里
            district = city.replace('区', '');
            city = province;
        }
    }
    console.log(province + ' ' + city + ' ' + district + ' ' + row.address);
    var conditionString = 'city = ?, district = ?';
    var params = [city, district, row.id];
    return db.execute("UPDATE shop SET " + conditionString + " WHERE id=?", params, function () {
        log(row.shop_name + ' 更新成功');
    });
};