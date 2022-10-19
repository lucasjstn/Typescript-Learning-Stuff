// function person(name: string, age: number | string, address: { street: string, number: string | number }) {
//     console.log(name, age, address);

// }

// person("Lucas", 23, { street: 'Valmiro de paulo', number: 230 })
//===============//
type numberOrString = number | string;

function person(name: string, age: numberOrString, address: { street: string, number: numberOrString }) {
    console.log(name, age, address);

}

person("Lucas", 23, { street: 'Valmiro de paulo', number: 230 })