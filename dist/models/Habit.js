"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habit = void 0;
var dateParsing_1 = require("../utilities/dateParsing");
var Habit = /** @class */ (function () {
    function Habit(id, name, description, category, dateCreated, type, period, status, penalty, archivedDate) {
        var _this = this;
        this.name = "";
        this.description = "";
        this.category = "";
        this.type = "";
        this.period = "";
        this.status = "";
        this.penalty = 0;
        this.calculateCheckinTotalForPeriod = function (checkins) {
            var hoursThisPeriod = 0;
            var endDate = new Date();
            var startDate = _this.getPeriodStartDate(new Date());
            var diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            for (var index = 0; index <= diffDays; index++) {
                var key = dateParsing_1.getDateKeyString(dateParsing_1.addDays(startDate, index));
                // Only count misses and checkins, don't subtract skips
                var hours = 0;
                if (checkins[key] && checkins[key] > 0)
                    hours = checkins[key];
                //let hours = checkins[key] || 0;
                hoursThisPeriod = hoursThisPeriod + hours;
            }
            return hoursThisPeriod;
        };
        this.retrieveTodaysCheckinValue = function (checkins) {
            var key = dateParsing_1.getDateKeyString(new Date());
            return checkins.hasOwnProperty(key) ? checkins[key] : 0;
        };
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.dateCreated = new Date(dateCreated.getTime());
        this.type = type;
        this.period = period;
        this.status = status;
        this.penalty = penalty;
        this.archivedDate = archivedDate ? new Date(archivedDate.getTime()) : undefined;
    }
    Habit.prototype.getPeriodStartDate = function (date) {
        if (this.period = 'week') { //Gets Monday
            return dateParsing_1.getFirstDayOfTheWeek(date);
        }
        else if (this.period = 'month') {
            return new Date(date.setDate(1));
        }
        else
            throw new Error("no date calculation for period: " + this.period);
    };
    return Habit;
}());
exports.Habit = Habit;
