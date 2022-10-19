export class Person {
    private myName: string = "Lucas Pereira de Oliveira"

    setMyName(myName: string) {
        this.myName = myName;
    }

    getMyName(): string {
        return this.myName;
    }

    info(): string {
        return `${this.myName}`
    }
}