"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyHabit = void 0;
var Habit_1 = require("./Habit");
var DailyHabit = /** @class */ (function (_super) {
    __extends(DailyHabit, _super);
    function DailyHabit(id, name, description, category, dateCreated, type, period, status, penalty, checkins, archivedDate) {
        var _this = _super.call(this, id, name, description, category, dateCreated, type, period, status, penalty, archivedDate) || this;
        _this.getCheckinTotalForPeriod = function () {
            return _this.calculateCheckinTotalForPeriod(_this.checkins);
        };
        _this.getTodaysCheckinValue = function () {
            return _this.retrieveTodaysCheckinValue(_this.checkins);
        };
        _this.checkins = checkins;
        return _this;
    }
    return DailyHabit;
}(Habit_1.Habit));
exports.DailyHabit = DailyHabit;
