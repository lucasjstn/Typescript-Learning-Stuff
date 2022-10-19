export class Person {
    protected myName: string = "Lucas";

    info(): string {
        return `${this.myName}`
    }
}