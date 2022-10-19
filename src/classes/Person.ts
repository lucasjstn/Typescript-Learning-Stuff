export class Person {
    readonly myName: string = "Lucas";

    constructor(name: string) {
        this.myName = name;
    }

    info(): string {
        return `${this.myName}`
    }
}