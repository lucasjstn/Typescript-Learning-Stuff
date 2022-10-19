//criar uma interface onde a pro name tem que ser string e age number
interface UserInterface {
    name: string,
    age: number
}


//criar uma classe com o Person T
class Person<T> {
    public data: T;
}


const p = new Person<UserInterface>();

p.data = {
    name: "Lucas",
    age: 239,
}

console.log(p.data);
