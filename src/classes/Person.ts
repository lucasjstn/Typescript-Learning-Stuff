export class Person {
    private _myName: string = "Lucas Pereira de Oliveira"

    // setMyName(myName: string) {
    //     this.myName = myName;
    // }

    set myName(myName: string) {
        this._myName = myName;
    }

    // getMyName(): string {
    //     return this.myName;
    // }

    get myName() {
        return this._myName;
    }
}