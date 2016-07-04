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
//http://www.robotedu.org/yp/company.php?action=searchlist&areaname=&catid=0&telephone=&q=&page=1
var getListPage = function() {
    // 抓取每一页的店铺地址
    var page = 1;
    var end = false;
    async.whilst(
        function () {
            return end == false;
        },
        function (cba) {
            var url = "http://www.robotedu.org/yp/company.php?action=searchlist&areaname=&catid=0&telephone=&q=&page=" + page;
            page ++;
            log('列表页url: ' + url);
            // 请求搜索地址
            httpRequest(url, function (body) {
                log('查询列表页内容成功...');
                getShopUrls(body, function () {
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
            log(err);
        }
    );
};

/**
 * 获取页面上所有的店铺链接
 * @param html
 * @param callback
 */
var getShopUrls = function (html, callback) {
    var $ = cheerio.load(html);
    $('.list_1').each(function () {
        var obj = $(this);
        var txt = obj.find('dt > strong > a');
        // 搜索名称
        var shopName = txt.text();
        var shopUrl = txt.attr('href');
        var tags = obj.find('dt > .area').text().split('.');
        var cityName = tags[0];
        var district = tags[1];
        log(shopName + ' -> ' + shopUrl + ' -> ' + cityName + ' ' + district);
        // 直接入库
        db.execute("INSERT INTO shop (shop_url, city, shop_name, address, tel, district, cate) VALUES (?, ?, ?, '', '', ?, '')", [shopUrl, cityName, shopName, district], function() {
            log(shopName, "入库成功");
        });
    });
    callback();
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
db.connect(function () {
    getListPage();
});