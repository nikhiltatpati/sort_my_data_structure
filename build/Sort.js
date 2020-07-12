"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
        this.print();
    };
    return Sort;
}());
exports.Sort = Sort;
