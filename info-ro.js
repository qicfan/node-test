/**
 * Created by Dean on 16/3/9.
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
    var robotListQueue = async.queue(function (task, callback) {
        task.run(callback);
    }, 1);

    db.findEach("SELECT * FROM shop WHERE complete=0", function (row) {
        robotListQueue.push({
            name: row.shop_name,
            url: row.shop_url,
            run: function (cb) {
                getInfo(row, cb);
            }
        }, function (err) {
            //log(row.city_name + ' 已完成 ', err);
        });
    }, function (err) {
        // 查询完成，返回
        return log(err + ', complete\n');
    });
});

var getInfo = function (row, cb) {
    if (row.shop_url.indexOf('?') >= 0) {
        var url = row.shop_url + '/category-contact.html';
    } else {
        var url = row.shop_url + '/?/category-contact.html';
    }
    log('详情页页url: ' + url);
    // 请求搜索地址
    httpRequest(url, function (body) {
        log('查询详情页内容成功...');
        var $ = cheerio.load(body);
        var tags = $('.txt_list > li');
        var condition = [];
        var params = [];
        // 处理电话
        var telDom = $(tags[0]).find('img');
        if (telDom && telDom != undefined) {
            // 电话存在，入库
            condition.push('tel=?');
            params.push('http://www.robotedu.org' + telDom.attr('src'));
        }
        // 处理邮箱
        var emailDom = $(tags[2]).find('img');
        if (emailDom && emailDom != undefined) {
            // 电话存在，入库
            condition.push('email=?');
            params.push('http://www.robotedu.org' + emailDom.attr('src'));
        }
        // 处理地址
        var address = $(tags[3]).text().replace('地址：', '');
        if (address) {
            condition.push('address=?');
            params.push(address);
        }
        console.log(params);
        if (condition && params) {
            condition.push('complete=1');
            params.push(row.id);
            conditionString = condition.join(',');
            return db.execute("UPDATE shop SET " + conditionString + " WHERE id=?", params, function () {
                log(row.shop_name + ' 更新成功');
                return t.fire(row.shop_name, cb, 400);
            });
        }
        log('没有需要更新的数据');
        cb();
    }, function (error, response, body) {
        if (response && response.statusCode && response.statusCode == 404) {
            return cb('页面不存在');
        }
        log(error);
        return cb(error);
    });
};

/**
 * 执行http请求
 * @param url
 * @param callback
 */
var httpRequest = function (url, callback, errorCallback) {
    request({url: url}, function (error, response, body) {
        if (error || response.statusCode != 200) {
            return errorCallback(error, response, body);
        }
        callback(body);
    });
};