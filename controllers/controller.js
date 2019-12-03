"use strict";
var rocket1;
var rocket2;
var thruster1 = [10, 30, 80];
var thruster2 = [30, 40, 50, 50, 30, 10];
function createRocket(code) {
    if (code == "32WESSDS") {
        rocket1 = new Rocket(code);
        for (var i = 0; i < thruster1.length; i++) {
            rocket1.addThruster(new Thruster(thruster1[i]));
        }
        document.getElementById("cardRocket1").classList.remove("d-none");
        document.getElementById("infoButton").classList.remove("d-none");
    }
    else if (code == "LDSFJA32") {
        rocket2 = new Rocket(code);
        for (var i = 0; i < thruster2.length; i++) {
            rocket2.addThruster(new Thruster(thruster2[i]));
        }
        document.getElementById("cardRocket2").classList.remove("d-none");
        document.getElementById("infoButton").classList.remove("d-none");
    }
}
function accelerateRocket(code, id) {
    if (code == rocket1.code) {
        document.getElementById(id).innerHTML = "Rocket " + rocket1.code + " has " + rocket1.thrusters.length + " thrusters.\n        Thrusters max power: " + rocket1.thrusters.toString() + ".\n        Current speed: " + rocket1.calculateCurrentSpeed();
        rocket1.accelerate();
    }
    else if (code == rocket2.code) {
        document.getElementById(id).innerHTML = "Rocket " + rocket2.code + " has " + rocket2.thrusters.length + " thrusters.\n        Thrusters max power: " + rocket2.thrusters.toString() + ".\n        Current speed: " + rocket2.calculateCurrentSpeed();
        rocket2.accelerate();
    }
    else {
        alert("error");
    }
}
function breakRocket(code, id) {
    if (code == rocket1.code) {
        document.getElementById(id).innerHTML = "Rocket " + rocket1.code + " has " + rocket1.thrusters.length + " thrusters.\n        Thrusters max power: " + rocket1.thrusters.toString() + ".\n        Current speed: " + rocket1.calculateCurrentSpeed();
        rocket1.break();
    }
    else if (code == rocket2.code) {
        document.getElementById(id).innerHTML = "Rocket " + rocket2.code + " has " + rocket2.thrusters.length + " thrusters.\n        Thrusters max power: " + rocket2.thrusters.toString() + ".\n        Current speed: " + rocket2.calculateCurrentSpeed();
        rocket2.break();
    }
    else {
        alert("error");
    }
}
