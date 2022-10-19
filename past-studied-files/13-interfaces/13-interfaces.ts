

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
    interface userInterface {
        name: string;
        age: number;
        color: string;
    }

    let user: userInterface;

    user = {
        name: 'lucas',
        age: 23,
        color: 'red'
    }

    function persons(user: userInterface) {
        console.log(user);

    }

    persons(user)
}

//usando type ao invés de interface vai funcionar igual por que são coisas similares

type userInterface = {
    name: string;
    age: number;
    color: string;
}

let user: userInterface;

user = {
    name: 'lucas',
    age: 23,
    color: 'red'
}

function person(user: userInterface) {
    console.log(user);

}

person(user)

//quando usar type e interface

//  interface sempre pra objetos
// type para os tipos
