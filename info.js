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

    db.findEach("SELECT * FROM shop_url WHERE complete=1 AND city != '台湾' AND cate IN ('DIY手工坊','亲子','亲子摄影','亲子游乐','亲子购物','休闲娱乐','公司企业','兴趣生活','其他','办公/文化用品','升学辅导','幼儿教育','教育培训','教育院校','更多亲子服务','更多休闲娱乐','更多教育培训','更多生活服务','更多运动场馆','桌面游戏','母婴儿童','特色集市','生活服务','职业技术')", function (row) {
        robotListQueue.push({
            name: row.shop_name,
            url: row.shop_url,
            run: function (cb) {
                updateTel(row, cb);
            }
        }, function (err) {
            //log(row.city_name + ' 已完成 ', err);
        });
    }, function (err) {
        // 查询完成，返回
        return log(err + ', complete\n');
    });
});

var updateTel = function (row, cb) {
    var tel = row.tel;
    var tels = [];
    tel = tel.replace('--', '-');
    if (tel.indexOf('暂无商家电话') >= 0) {
        log(row.id + ' ', '清空电话');
        cb();
        return;
    }
    // 取第一个字符
    var length = row.tel.length;
    var offset = 0;
    while (1) {
        if (offset >= length) {
            break;
        }
        var first = tel.substr(offset, 1);
        console.log(row.id + ' ', row.tel + ', offset: ' + offset + ', first: ' + first);
        if (first == 4) {
            // 400电话，截取10位
            tels.push(tel.substr(offset, 10));
            log(row.id + ' ', '400电话，截取10位->' + tel.substring(offset, 10));
            offset += 10;
            continue;
        }
        if (first == 0) {
            // 座机，截取12位
            tels.push(tel.substr(offset, 12));
            log(row.id + ' ', '座机，截取12位->' + tel.substring(offset, 12));
            offset += 12;
            continue;
        }
        if (first == 1) {
            // 手机，截取11位
            tels.push(tel.substr(offset, 11));
            log(row.id + ' ', '手机，截取11位->' + tel.substring(offset, 11));
            offset += 11;
            continue;
        }
        break;
    }
    telString = tels.join(',');
    log(row.id + ' 电话号码：', telString);
    if (telString) {
        db.execute("UPDATE shop_url SET new_tel=? WHERE id=?", [telString, row.id], function () {});
    }
    cb();
    return;
};

var getInfo = function (row, cb) {
    var url = row.shop_url;
    log('详情页页url: ' + url);
    // 请求搜索地址
    httpRequest(url, function (body) {
        log('查询详情页内容成功...');
        var $ = cheerio.load(body);
        var addr = $('.shop-info > .shop-addr > span').attr('title');
        var condition = [];
        var params = [];
        if (!addr) {
            // 试用新的格式
            addr = $('.desc-list > .shopDeal-Info-address > .shop-info-content > span:first-child').text();
        }
        if (!addr) {
            addr = $('.address > .item').attr('title');
        }
        if (addr) {
            condition.push('address=?');
            params.push(addr);
        }
        var tel = $('.shop-info > .shopinfor > p > span:first-child').text();
        if (!tel) {
            // 试用新的格式
            tel = $('.desc-list > dl > .shop-info-content > strong:first-child').text();
        }
        if (!tel) {
            // 试用新的格式
            tel = $('.tel > .item').text();
        }
        if (addr) {
            condition.push('tel=?');
            params.push(tel);
        }
        log(row.shop_name + ': ' + addr + '(' + tel + ')');
        // 更新到数据库中
        if (condition.length > 0) {
            condition.push('complete=1');
            params.push(row.id);
            var conditionString = condition.join(', ');
            db.execute("UPDATE shop_url SET " + conditionString + " WHERE id=?", params, function () {
                log(row.shop_name + ' 更新成功');
            });
        }
        return t.fire(row.city_name, cb, 400);
    }, function (error, response, body) {
        if (response && response.statusCode && response.statusCode == 404) {
            return cb('页面不存在');
        }
        log(error);
        return cb(error);
    });
};

/**
 * 获取页面上所有的店铺链接
 * @param html
 * @param callback
 */
var getShopUrls = function (row, html, callback) {
    var $ = cheerio.load(html);
    $('.shop-list > ul > li > .txt').each(function () {
        var obj = $(this);
        var txt = obj.find('.tit > a:first-child');
        // 搜索名称
        var shopName = txt.attr('title');
        var shopUrl = "http://www.dianping.com" + txt.attr('href');
        var addrTag = obj.find('.tag-addr > a > .tag');
        // 搜索分类
        var cate = $(addrTag[0]).text();
        var district = $(addrTag[1]).text();
        var addr = obj.find('.tag-addr > .addr').text();
        log(shopName + ' -> ' + shopUrl + ' -> ' + cate + ' ' + district + ' ' + addr);
        // 直接入库
        db.execute("INSERT INTO shop_url (shop_url, city, shop_name, address, tel, district, cate) VALUES (?, ?, ?, ?, '', ?, ?)", [shopUrl, row.city_name, shopName, addr, district, cate], function () {
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