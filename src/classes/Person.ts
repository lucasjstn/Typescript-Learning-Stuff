export class Person {
    readonly myName: string = "Lucas";

    setMyName(name: string) {
        this.myName = name;
    }

    info(): string {
        return `${this.myName}`
    }
}