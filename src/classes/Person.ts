export class Person {
    name: string;

    //se criar um metodo estatico e chamar com this uma propriedade estatica na mesma classe ele deixa


    //mas ao acessar uma propriedade nao estatica ele reclama
    info(): string {
        return `${this.name} `;
    }
}