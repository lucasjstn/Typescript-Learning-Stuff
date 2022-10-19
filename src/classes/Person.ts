export class Person {
    readonly myName: string = "Lucas";

    info(): string {
        return `${this.myName}`
    }
}