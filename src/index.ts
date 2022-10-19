import { Person } from "./classes/Person";
//atributos e metodos estaticos podem ser acessados sem precisar instanciar

// const p = new Person()
// console.log(p.myName); //Property 'myName' does not exist on type 'Person'. Did you mean to access the static member 'Person.myName' instead

Person.myName = 'asdasd';

const p = new Person();

console.log(p.info());
