import { Person } from "./classes/Person";

const p = new Person()
console.log(p.info());

p.myName = 'sandra' //Cannot assign to 'myName' because it is a read-only property.

console.log(p.info());
