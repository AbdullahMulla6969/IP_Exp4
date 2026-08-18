class Person {
public name: string = "Leo";
protected age: number = 22;
private password: string = "12345";

walk(): void {
console.log(this.name, "is walking");
}
}

interface Employee {
work(): void;
}

interface Student {
study(): void;
}

class Intern extends Person implements Employee, Student {
work(): void {
console.log("Age:", this.age);
console.log("Intern is working");
}

study(): void {

console.log("Intern is studying");
}
}

const intern = new Intern();

intern.walk();
intern.work();
intern.study();

export {};
