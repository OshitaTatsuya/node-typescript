"use strict";
var fs = require("fs");
var csv = require("csv");
var list;
var Test2 = /** @class */ (function () {
    function Test2(csvPath) {
        this.csvReadPath = csvPath;
    }
    /**
     * CSVファイル読込み
     *
     */
    Test2.prototype.readCsv = function () {
        fs.createReadStream(this.csvReadPath).pipe(csv.parse(function (err, data) {
            console.log(data);
        }));
    };
    /**
     * CSVファイル読込み(JSON整形)
     */
    Test2.prototype.readCsvParsseJson = function () {
        fs.createReadStream(this.csvReadPath).pipe(csv.parse({ columns: true }, function (err, data) {
            console.log(data);
        }));
    };
    return Test2;
}());
var test2 = new Test2("./data/in/testdata.csv");
test2.readCsv();
test2.readCsvParsseJson();
