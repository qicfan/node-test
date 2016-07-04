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
        'Referer': 'http://www.dianping.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
    }
});

db.connect(function () {
    var robotListQueue = async.queue(function (task, callback) {
        task.run(callback);
    }, 1);

    db.findEach("SELECT * FROM city ORDER BY city_id ASC", function (row) {
        robotListQueue.push({
            name: row.city_name,
            url: row.url,
            run: function (cb) {
                getListPage(row, cb);
            }
        }, function (err) {
            //log(row.city_name + ' 已完成 ', err);
        });
    }, function (err) {
        // 查询完成，返回
        return log(err + ', complete\n');
    });
});

var getListPage = function(row, cb) {
    // 抓取每一页的店铺地址
    var page = 1;
    var end = false;
    async.whilst(
        function () {
            return end == false;
        },
        function (cba) {
            //http://www.dianping.com/search/keyword/2/70_%E6%B4%BB%E5%8A%A8%E4%B8%AD%E5%BF%83/
            var url = "http://www.dianping.com/search/keyword/"+row.city_id+"/70_%E6%B4%BB%E5%8A%A8%E4%B8%AD%E5%BF%83/p" + page;
            page ++;
            log('列表页url: ' + url);
            // 请求搜索地址
            httpRequest(url, function (body) {
                log('查询列表页内容成功...');
                getShopUrls(row, body, function () {
                    log('查询店铺地址成功');
                    return cba(null);
                });
            }, function (error, response, body) {
                if (response && response.statusCode && response.statusCode == 404) {
                    end == true;
                    return cba('没有下一页');
                }
                log(error);
                return cba(error);
            });
        },
        function (err) {
            t.fire(row.city_name, cb, 400); // 400ms后执行
            if (err=='没有下一页') {
                db.execute("UPDATE city SET complete=1 WHERE id=?", [row.id], function(){});
            }
            //db.execute("UPDATE city SET complete=1 WHERE id=?", [row.id], function(){});
            log(err + '， 继续下一个城市');
        }
    );
};

/**
 * 获取页面上所有的店铺链接
 * @param html
 * @param callback
 */
var getShopUrls = function (row, html, callback) {
    var $ = cheerio.load(html);
    $('.shop-list > li > .info').each(function () {
        var obj = $(this);
        var name = obj.find('.title > a.shopname');
        // 搜索名称
        var shopName = name.attr('title');
        var shopUrl = "http://www.dianping.com" + name.attr('href');
        // 搜索分类
        var cate = obj.find('.key-list').text();
        var district = obj.find('.area-list').text();
        var addr = '';
        log(shopName + ' -> ' + shopUrl + ' -> ' + cate + ' ' + district + ' ' + addr);
        // 直接入库
        db.execute("INSERT INTO shop_url (shop_url, city, shop_name, address, tel, district, cate) VALUES (?, ?, ?, ?, '', ?, ?)", [shopUrl, row.city_name, shopName, addr, district, cate], function() {
            log(shopName, "入库成功");
        });
    });
    callback();
};

/**
 * 获取店铺信息，包括店名、地址、电话
 * @param html
 * @param callback
 */
var getShopInfo = function (html, callback) {

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