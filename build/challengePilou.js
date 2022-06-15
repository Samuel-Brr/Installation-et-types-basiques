//Créer une classe "Car". Cette classe possède : 8 propriétés : - brand - model - color -  
//horsePower - fuelType - wheels - isOn - currentGear 
class Car {
    constructor(brand, model, color, horsePower, fuelType) {
        this.wheels = 2;
        this.isOn = false;
        this.currentGear = 0;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = horsePower;
        this.fuelType = fuelType;
    }
    turnContactOn() { this.isOn = true; }
    turnContactOff() { this.isOn = false; }
    accelerate() {
        if (this.currentGear < 9) {
            this.currentGear++;
        }
    }
    brake() {
        if (this.currentGear > 0) {
            this.currentGear--;
        }
    }
    openSunRoof() {
        console.log("Opening sun roof 😎");
    }
    turnOnFourWheelDriving() {
        this.wheels = 4;
    }
    turnOffFourWheelDriving() {
        this.wheels = 2;
    }
}
class SportCar extends Car {
    constructor(brand, model, color, horsePower, fuelType, hasGearsOnSteeringWheel, totalGears, ExhaustPipesNumber) {
        super(brand, model, color, horsePower, fuelType);
        this.isSportModeActivated = false;
        this.hasGearsOnSteeringWheel = hasGearsOnSteeringWheel;
        this.totalGears = totalGears;
        this.ExhaustPipesNumber = ExhaustPipesNumber;
    }
    turnOnSportMode() {
        this.isSportModeActivated = true;
    }
}
class SuvCar extends Car {
    constructor(brand, model, color, horsePower, fuelType, heightFromTheGround, hasLeatherSeats) {
        super(brand, model, color, horsePower, fuelType);
    }
}
const merco = new SportCar('merco', 'sls', 'black', 1000, 'essence', true, 8, 2);
merco.turnContactOn();
merco.openSunRoof();
merco.turnOnSportMode();
merco.accelerate();
const urus = new SuvCar('lambo', 'urus', 'yellow', 2000, 'essence', 50, true);
urus.turnContactOn();
urus.turnOnFourWheelDriving();
urus.accelerate();
