export class Person {
    static myName: string = "Aluisio da Cunha"


    //se criar um metodo estatico e chamar com this uma propriedade estatica na mesma classe ele deixa
    static info(): string {
        return `${this.myName};
    }
}