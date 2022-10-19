export class Person {
    name: string;
    age: number | string;

    constructor(name: string, age: number | string) {
        this.name = name;
        this.age = age;
    }

    info(): string {
        return `Meu nome é ${this.name}, e minha idade é de ${this.age}`
    }
}