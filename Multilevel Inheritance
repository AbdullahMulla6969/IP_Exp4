class Animal {
public name: string = "Animal";
protected age: number = 5;
private id: number = 101;

eat(): void {
console.log(this.name, "is eating food");
}
}

class Dog extends Animal {
bark(): void {
console.log("Age:", this.age);
console.log("Dog is barking");
}
}

class Puppy extends Dog {
weep(): void {
console.log("Puppy is crying");
}
}

const puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.weep();

export {};
