import { Person } from "./classes/Person";

const p = new Person()
console.log(p.info());

p.myName = 'sandra' //Property 'myName' is private and only accessible within class 'Person'.

console.log(p.info());
