// POO en Typescript 1 - Procédural vs Objet, classes, instances
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const john = new Person('John', 40);
john.tellMyName();
john.tellMyAge();
const mary = new Person('Mary', 35);
mary.tellMyName();
mary.tellMyAge();
