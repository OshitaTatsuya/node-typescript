"use strict";
var TestData = /** @class */ (function () {
    function TestData(name, age, phoneNumber, address) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    TestData.prototype.getName = function () {
        return this.name;
    };
    TestData.prototype.setName = function (name) {
        this.name = name;
    };
    TestData.prototype.getAge = function () {
        return this.age;
    };
    TestData.prototype.setAge = function (age) {
        this.age = age;
    };
    TestData.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    TestData.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    TestData.prototype.getAddress = function () {
        return this.address;
    };
    TestData.prototype.setAddress = function (address) {
        this.address = address;
    };
    return TestData;
}());
