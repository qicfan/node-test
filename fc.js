/**
 * Created by Dean on 16/3/23.
 */
var nodejieba = require("nodejieba");

var cTags = nodejieba.cut("庆祝乐创家成功挂牌新三板，第六届“”少年科学家“机器人网络海选活动开始啦！万元大奖花落谁家，网络海选一决高下。详情请点击：cys.lechome.com");
console.log(cTags);

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