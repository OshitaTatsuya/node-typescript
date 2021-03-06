"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var TestHttpServer = /** @class */ (function () {
    function TestHttpServer() {
        var _this = this;
        // httpサーバーを設定する
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('8080');
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    TestHttpServer.prototype.requestHandler = function (request, response) {
        response.end('Hello! Node.js with TypeScript');
    };
    return TestHttpServer;
}());
var server = new TestHttpServer();
