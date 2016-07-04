/**
 * Created by Dean on 16/3/10.
 */
var sqlite = require('sqlite3');
var t = require('./t');
var log = t.log;
sqlite.verbose();
var db = undefined;

exports.connect = function (callback) {
    db = new sqlite.Database("data.db", sqlite.OPEN_READWRITE, function (err) {
        if (err) {
            util.log('FAIL on creating database ' + err);
            callback(err);
        } else {
            callback(null);
        }
    });
};

exports.execute = function (sql, params, callback) {
    return db.run(sql, params, function (error) {
        if (error) {
            return log('FAIL on execute ' + error);
        } else {
            callback(null);
        }
    });
};

exports.findEach = function (sql, callback, done) {
    db.each(sql, function (err, row) {
        if (err) {
            // 查询完成，返回
            return done(err);
        }
        callback(row);
    }, function() {
        return done();
    });
};