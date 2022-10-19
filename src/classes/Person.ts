export class Person {
    constructor(public name: string, public age: number | string) { }


    info(): string {
        return `Meu nome é ${this.name}, e minha idade é de ${this.age}`
    }
}

//vai sair tudo undefined no terminal
// export class Person {
//     constructor(name: string, age: number | string) { }


//     info(): string {
//         return `Meu nome é ${this.name}, e minha idade é de ${this.age}`
//     }
// }