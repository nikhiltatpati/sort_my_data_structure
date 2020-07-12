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
exports.StringClass = void 0;
var Sort_1 = require("./Sort");
var StringClass = /** @class */ (function (_super) {
    __extends(StringClass, _super);
    function StringClass(data) {
        var _this = _super.call(this) || this;
        _this.data = data.split("");
        return _this;
    }
    Object.defineProperty(StringClass.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    StringClass.prototype.compare = function (i, j) {
        if (this.data[i] > this.data[j]) {
            return true;
        }
        return false;
    };
    StringClass.prototype.swap = function (i, j) {
        var temp;
        temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    StringClass.prototype.print = function () {
        console.log(this.data);
    };
    return StringClass;
}(Sort_1.Sort));
exports.StringClass = StringClass;
