"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberClass = void 0;
var Sort_1 = require("./Sort");
var NumberClass = /** @class */ (function (_super) {
    __extends(NumberClass, _super);
    function NumberClass(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumberClass.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberClass.prototype.compare = function (i, j) {
        if (this.data[i] > this.data[j]) {
            return true;
        }
        return false;
    };
    NumberClass.prototype.swap = function (i, j) {
        var temp;
        temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    NumberClass.prototype.print = function () {
        console.log(this.data);
    };
    return NumberClass;
}(Sort_1.Sort));
exports.NumberClass = NumberClass;
