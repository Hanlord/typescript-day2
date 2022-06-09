"use strict";
class Person {
    constructor(fname, age, jobtitle, salary, jobLocation) {
        this.fname = fname;
        this.age = age;
        this.jobtitle = jobtitle;
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printFullInfo() {
        return `Hello there, My name is ${this.fname} and i am ${this.age} years old, i am a ${this.jobtitle} and i get ${this.salary} every month, and i work in ${this.jobLocation}.`;
    }
}
let person1 = new Person("WeHan", 34, "developer", 3000, "vienna");
console.log(person1.printFullInfo());
