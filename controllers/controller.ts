var rocket1: Rocket;
var rocket2: Rocket;

function createRocket1() {
    rocket1 = new Rocket("32WESSDS");
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    (<HTMLInputElement>document.getElementById("cardRocket1")).classList.remove("d-none");
    (<HTMLInputElement>document.getElementById("infoButton")).classList.remove("d-none");
}

function createRocket2() {
    rocket2 = new Rocket("LDSFJA32");
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    (<HTMLInputElement>document.getElementById("cardRocket2")).classList.remove("d-none");
    (<HTMLInputElement>document.getElementById("infoButton")).classList.remove("d-none");
}

function accelerateRocket(code: string, id: string) {

    if (code == rocket1.code) {
        (<HTMLInputElement>document.getElementById(id)).innerHTML = `Rocket ${rocket1.code} has ${rocket1.thrusters.length} thrusters.
        Thrusters max power: ${rocket1.thrusters.toString()}.
        Current speed: ${rocket1.calculateCurrentSpeed()}`;
        rocket1.accelerate();
    } else if (code == rocket2.code) {
        (<HTMLInputElement>document.getElementById(id)).innerHTML = `Rocket ${rocket2.code} has ${rocket2.thrusters.length} thrusters.
        Thrusters max power: ${rocket2.thrusters.toString()}.
        Current speed: ${rocket2.calculateCurrentSpeed()}`;
        rocket2.accelerate();
    } else {
        alert("error");
    }
}

function breakRocket(code: string, id: string) {

    if (code == rocket1.code) {
        (<HTMLInputElement>document.getElementById(id)).innerHTML = `Rocket ${rocket1.code} has ${rocket1.thrusters.length} thrusters.
        Thrusters max power: ${rocket1.thrusters.toString()}.
        Current speed: ${rocket1.calculateCurrentSpeed()}`;
        rocket1.break();
    } else if (code == rocket2.code) {
        (<HTMLInputElement>document.getElementById(id)).innerHTML = `Rocket ${rocket2.code} has ${rocket2.thrusters.length} thrusters.
        Thrusters max power: ${rocket2.thrusters.toString()}.
        Current speed: ${rocket2.calculateCurrentSpeed()}`;
        rocket2.break();
    } else {
        alert("error");
    }
}


