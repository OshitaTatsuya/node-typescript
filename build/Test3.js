"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var iconv_lite_1 = __importDefault(require("iconv-lite"));
var csvtojson_1 = __importDefault(require("csvtojson"));
/**
 * 指定したパスのcsvファイルをロードして、JSONオブジェクトとしてparseする。
 * 全行読み込んだら完了する Promise を返す。
 * @param path
 */
var parse = function (path) {
    return new Promise(function (resolve, reject) {
        var datas = [];
        fs_1.default.createReadStream(path)
            .pipe(iconv_lite_1.default.decodeStream('Shift_JIS'))
            .pipe(iconv_lite_1.default.encodeStream('utf-8'))
            .pipe(csvtojson_1.default().on('data', function (data) { return datas.push(JSON.parse(data)); })) // 各行読んだらココが呼ばれるので配列にpush
            .on('end', function () { return resolve(datas); }); // 全部終わったらココにくるので、resolveする
    });
};
if (!module.parent) {
    // 呼んでみる
    parse('./data/in/testdata.csv').then(function (results) {
        // 郵便番号が「100-000x」のものに絞ってみた
        // results = results.filter(address => address['電話番号'].startsWith('090-0000-0000'))
        results = results.filter(function (address) { return address['電話番号'].startsWith('090-0000'); });
        console.table(results);
        // for (const address of results) {
        //   console.log(address)
        // }
    });
}
