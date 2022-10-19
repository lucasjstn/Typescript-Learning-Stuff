//criar uma interface onde a pro name tem que ser string e age number
interface UserInterface {
    name: string,
    age: number
}


//criar uma classe com o Person T
class Person<T> {
    public data: T;
}

class Person1 extends Person<UserInterface> {
    public data: UserInterface;
}

//agora nao precisa do <UserInterface>
const p = new Person1();

p.data = {
    name: "Lucas",
    age: '239',
}

console.log(p.data);
