// let user: {
//     name: string,
//     age: number,
//     color: string,
// }
// function person(user: { name: string; age: number; color: string }) {
//     console.log(user);
// }
// person({ name: "lucas", age: 23, color: 'black' }) 
//==============//
//pra facilitar a escrita de varias objetos parecidos
{
    let user;
    user = {
        name: 'lucas',
        age: 23,
        color: 'red'
    };
    function persons(user) {
        console.log(user);
    }
    persons(user);
}
let user;
user = {
    name: 'lucas',
    age: 23,
    color: 'red'
};
function person(user) {
    console.log(user);
}
person(user);
//quando usar type e interface
//  interface sempre pra objetos
// type para os tipos
