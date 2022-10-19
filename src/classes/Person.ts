export class Person {
    constructor(public name: string, public age: number | string) { }


    info(): string {
        return `Meu nome é ${this.name}, e minha idade é de ${this.age}`
    }
}