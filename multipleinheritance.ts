interface Printer {
print(): void;
}

interface Scanner {
scan(): void;
}

class Machine implements Printer, Scanner {
public name: string = "Canon";
protected version: string = "1.0";
private serialNo: number = 5001;

print(): void {
console.log(this.name, "is printing");
}

scan(): void {
console.log("Version:", this.version);
console.log("Machine is scanning");
}
}

const machine = new Machine();

machine.print();
machine.scan();

export {};
