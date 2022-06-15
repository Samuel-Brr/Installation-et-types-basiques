//Créer une classe "Car". Cette classe possède : 8 propriétés : - brand - model - color -  
//horsePower - fuelType - wheels - isOn - currentGear 

// méthodes turnContactOn() - turnContactOff() - accelerate() - brake() - openSunRoof() - 
//turnOnFourWheelDriving() - turnOffFourWheelDriving()

interface ISport{
    isSportModeActivated: boolean
    hasGearsOnSteeringWheel: boolean
    totalGears: number
    ExhaustPipesNumber: number

    turnOnSportMode():void;

}

interface ISuv{
    heightFromTheGround: number
    hasLeatherSeats: boolean
}


class Car{
    private brand: string
    private model: string
    private color: string
    private horsePower: number
    private fuelType: string
    private wheels: number = 2
    private isOn: boolean = false
    private currentGear: number = 0

    constructor(brand: string, 
                model: string, 
                color: string, 
                horsePower: number, 
                fuelType: string, 
               ){
        
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = horsePower;
        this.fuelType  = fuelType;
    }

    public turnContactOn(): void {this.isOn = true}
    public turnContactOff(): void {this.isOn = false}

    public accelerate(): void {
        if(this.currentGear < 9){
            this.currentGear ++;
        }
    }

    public brake(): void {
        if(this.currentGear > 0){
            this.currentGear --;
        }
    }

    public openSunRoof(): void {
        console.log("Opening sun roof 😎")
    }

    public turnOnFourWheelDriving(): void {
        this.wheels = 4
    }

    public turnOffFourWheelDriving(): void {
        this.wheels = 2
    }
}

class SportCar extends Car implements ISport {
    isSportModeActivated: boolean = false
    hasGearsOnSteeringWheel: boolean
    totalGears: number
    ExhaustPipesNumber: number

    constructor(brand: string, 
        model: string, 
        color: string, 
        horsePower: number, 
        fuelType: string,
        hasGearsOnSteeringWheel: boolean,
        totalGears: number,
        ExhaustPipesNumber: number){
            super(brand, model, color, horsePower, fuelType)
            this.hasGearsOnSteeringWheel = hasGearsOnSteeringWheel
            this.totalGears = totalGears
            this.ExhaustPipesNumber = ExhaustPipesNumber
    }

    public turnOnSportMode():void{
        this.isSportModeActivated = true;
    }
}

class SuvCar extends Car implements ISuv {
    heightFromTheGround: number
    hasLeatherSeats: boolean

    constructor(brand: string, 
        model: string, 
        color: string, 
        horsePower: number, 
        fuelType: string,
        heightFromTheGround: number,
        hasLeatherSeats: boolean){
            super(brand, model, color, horsePower, fuelType)
    }
}

const merco = new SportCar('merco', 'sls', 'black', 1000, 'essence', true, 8, 2)
merco.turnContactOn()
merco.openSunRoof()
merco.turnOnSportMode()
merco.accelerate()

const urus = new SuvCar('lambo', 'urus', 'yellow', 2000, 'essence', 50, true)
urus.turnContactOn()
urus.turnOnFourWheelDriving()
urus.accelerate()


