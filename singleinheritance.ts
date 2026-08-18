class Person {
public name: string;
protected age: number;
private id: number;
protected city: string;

constructor(name: string, age: number, city: string, id: number) {
this.name = name;
this.age = age;
this.city = city;
this.id = id;
}

displayDetails(): void {
console.log("Name:", this.name);
console.log("Age:", this.age);
console.log("City:", this.city);
}
}

class Student extends Person {
public course: string;

constructor(name: string, age: number, city: string, id: number, course: string) {
super(name, age, city, id);

this.course = course;
}

showStudentInfo(): void {
console.log("Name:", this.name);
console.log("Age:", this.age);
console.log("City:", this.city);
console.log("Course:", this.course);
}
}
const student = new Student("Leo", 20, "Mumbai", 101, "Computer Science");
student.displayDetails();
student.showStudentInfo();
export {};
