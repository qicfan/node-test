/**
 * Created by Dean on 16/3/22.
 */
var xlsx = require("node-xlsx");
var fs = require('fs');

var xlsxObj = xlsx.parse('/Users/Dean/Downloads/1.xlsx');
var data = xlsxObj[0]['data'];
var newData = [];
// 循环处理数据，并且写入文件
for (var i in data) {
    if (i == 0) {
        continue;
    }
    var tel = data[i][7] ? data[i][7] : data[i][9];
    var item = {
        address: data[i][4],
        name: data[i][5],
        provincial: data[i][1],
        city: data[i][2],
        district: data[i][3],
        phone: tel,
        audit_status: 3,
        contacter: data[i][8],
        contact_phone: data[i][9],
    };
    newData.push(item);
}
// 写入文件
fs.writeFile('./ins.json', JSON.stringify(newData));