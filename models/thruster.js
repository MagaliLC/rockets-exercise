"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        var _this = this;
        this.currentPower = 0;
        this.toString = function () {
            return "" + _this.maxPower;
        };
        this.maxPower = maxPower;
    }
    return Thruster;
}());
