"use strict";
// classを指定してクラス化
var OutHello = /** @class */ (function () {
    // コンストラクター
    function OutHello() {
        console.log("Hello! Node.js × TypeScript from Class");
    }
    return OutHello;
}());
// クラスのインスタンスを作る
var hello = new OutHello();
