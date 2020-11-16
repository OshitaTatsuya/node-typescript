"use strict";
var Test1 = /** @class */ (function () {
    function Test1() {
        this.name = "test";
    }
    Test1.prototype.outMsg = function () {
        console.log("name=[" + this.name + "]");
    };
    return Test1;
}());
var test1 = new Test1();
test1.outMsg();
