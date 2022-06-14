// POO en Typescript 1 - Procédural vs Objet, classes, instances

class Person{
    private name: string = "";
    private age: number = 0;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

public tellMyName(){
    console.log(`I am ${this.name}`)
}
public tellMyAge(){
    console.log(`I am ${this.age} years old`)
}

}

const john = new Person('John', 40);
john.tellMyName();
john.tellMyAge();

const mary = new Person('Mary', 35);
mary.tellMyName();
mary.tellMyAge();