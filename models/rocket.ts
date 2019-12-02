class Rocket {
    code: string;
    thrusters: Thruster[] = new Array();
    speed: number;

    constructor(code: string) {
        this.code = code;
        this.speed = 0;
    }

    addThruster(thruster: Thruster) {
        this.thrusters.push(thruster);
    }

    accelerate() {
        for (let i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower < this.thrusters[i].maxPower) {
                this.thrusters[i].currentPower += 10;
            }
        }
    }

    break() {
        for (let i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i].currentPower > 0) {
                this.thrusters[i].currentPower -= 10;
            }
        }
    }
    calculateCurrentSpeed() {
        let totalSpeed: number = 0;
        for (let i = 0; i < this.thrusters.length; i++) {

            console.log(this.thrusters[i].currentPower);
            totalSpeed += this.thrusters[i].currentPower;

        } this.speed = totalSpeed;
        return this.speed;
    }
}
