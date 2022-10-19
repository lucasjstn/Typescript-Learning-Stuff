export class Person {
    static myName: string = "Aluisio da Cunha"
    age: number = 23;

    //se criar um metodo estatico e chamar com this uma propriedade estatica na mesma classe ele deixa


    //mas ao acessar uma propriedade nao estatica ele reclama
    static info(): string {
        return `${this.myName}`;
    }
}