"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
        this.speed = 0;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.accelerate = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower < this.thrusters[i].maxPower) {
                this.thrusters[i].currentPower += 10;
            }
        }
    };
    Rocket.prototype.break = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower > 0) {
                this.thrusters[i].currentPower -= 10;
            }
        }
    };
    Rocket.prototype.calculateCurrentSpeed = function () {
        var totalSpeed = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            console.log(this.thrusters[i].currentPower);
            totalSpeed += this.thrusters[i].currentPower;
        }
        this.speed = totalSpeed;
        return this.speed;
    };
    return Rocket;
}());
