import { Person } from "./classes/Person";

const p = new Person()
console.log(p.info());

p.myName = 'sandra' //Property 'myName' is protected and only accessible within class 'Person' and its subclasses
console.log(p.info());
