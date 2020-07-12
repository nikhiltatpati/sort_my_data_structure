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
exports.Linked_List = void 0;
var Sort_1 = require("./Sort");
var lNode = /** @class */ (function () {
    function lNode(data) {
        this.data = data;
        this.next = null;
    }
    return lNode;
}());
var Linked_List = /** @class */ (function (_super) {
    __extends(Linked_List, _super);
    function Linked_List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Linked_List.prototype.add = function (data) {
        var new_node = new lNode(data);
        if (this.head == null) {
            this.head = new_node;
            return;
        }
        else {
            var pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = new_node;
        }
    };
    Object.defineProperty(Linked_List.prototype, "length", {
        get: function () {
            var pointer = this.head;
            var len = 0;
            while (pointer) {
                len += 1;
                pointer = pointer.next;
            }
            return len;
        },
        enumerable: false,
        configurable: true
    });
    Linked_List.prototype.print = function () {
        var pointer = this.head;
        while (pointer) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
    };
    Linked_List.prototype.swap = function (i, j) {
        if (i == j) {
            return;
        }
        var index_i = 0;
        var index_j = 0;
        var prev_1 = null;
        var curr_1 = this.head;
        while (curr_1 && index_i != i) {
            prev_1 = curr_1;
            curr_1 = curr_1.next;
            index_i += 1;
        }
        var prev_2 = null;
        var curr_2 = this.head;
        while (curr_2 && index_j != j) {
            prev_2 = curr_2;
            curr_2 = curr_2.next;
            index_j += 1;
        }
        if (!curr_1 || !curr_2) {
            return;
        }
        if (prev_1) {
            prev_1.next = curr_2;
        }
        else {
            this.head = curr_2;
        }
        if (prev_2) {
            prev_2.next = curr_1;
        }
        else {
            this.head = curr_1;
        }
        var temp = curr_2.next;
        curr_2.next = curr_1.next;
        curr_1.next = temp;
    };
    Linked_List.prototype.compare = function (i, j) {
        var index_i = 0;
        var index_j = 0;
        var curr_1 = this.head;
        while (curr_1 && index_i != i) {
            curr_1 = curr_1.next;
            index_i += 1;
        }
        var curr_2 = this.head;
        while (curr_2 && index_j != j) {
            curr_2 = curr_2.next;
            index_j += 1;
        }
        if (!curr_1 || !curr_2) {
            return;
        }
        if (curr_1.data > curr_2.data) {
            return true;
        }
        else {
            return false;
        }
    };
    return Linked_List;
}(Sort_1.Sort));
exports.Linked_List = Linked_List;
