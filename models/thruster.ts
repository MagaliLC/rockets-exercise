class Thruster {
    public maxPower: number;
    public currentPower: number = 0;
    public toString = (): string => {
        return `${this.maxPower}`;
    }

    constructor(maxPower: number) {
        this.maxPower = maxPower;
    }

}



