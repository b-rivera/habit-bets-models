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
exports.OneTimeHabit = void 0;
var Habit_1 = require("./Habit");
var dateParsing_1 = require("../utilities/dateParsing");
var OneTimeHabit = /** @class */ (function (_super) {
    __extends(OneTimeHabit, _super);
    function OneTimeHabit(id, name, description, category, dateCreated, type, period, status, penalty, deadline, completed, archivedDate) {
        var _this = _super.call(this, id, name, description, category, dateCreated, type, period, status, penalty, archivedDate) || this;
        _this.isDueThisWeek = function () {
            var _today = new Date();
            var _start = dateParsing_1.getFirstDayOfTheWeek(_today).getTime();
            var _last = dateParsing_1.getLastDayOfTheWeek(_today).getTime();
            var _deadline = _this.deadline.getTime();
            // console.log("Deadline: " + this.deadline);
            // console.log("Start: " + getFirstDayOfTheWeek(_today));
            // console.log("Last: " + getLastDayOfTheWeek(_today));
            return (_deadline <= _last && _deadline >= _start) ? true : false;
        };
        _this.deadline = new Date(deadline.getTime());
        _this.completed = completed;
        return _this;
    }
    return OneTimeHabit;
}(Habit_1.Habit));
exports.OneTimeHabit = OneTimeHabit;
