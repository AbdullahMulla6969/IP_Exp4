class Animal {
public name: string = "Animal";
protected age: number = 4;
private id: number = 201;

eat(): void {
console.log(this.name, "is eating");
}
}

class Dog extends Animal {
bark(): void {
console.log("Age:", this.age);
console.log("Dog barks");
}
}

class Cat extends Animal {
meow(): void {
console.log("Age:", this.age);
console.log("Cat meows");
}
}

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.meow();

export {};
