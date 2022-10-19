// let myName = "Lucas"

// console.log(myName);
// =================

// let myName: string;

// myName = "Lucas"

// Type 'number' is not assignable to type 'string'.
// myName = 19;
//===================

//funciona
// let myName: any;

// myName = 'lucas';

//=============

// let data: any[] = [];
// 
// data.push('lucas', 23, true)
// console.log(data);
// 
// ======

// let user: {
//     name: string,
//     color: string,
//     isAdmin: boolean,
// }

// user = {
//     name: "Lucas",
//     color: "red",
//     isAdmin: false,
// }

// console.log(user);

//=========

let user: {
    name: string,
    color: string,
    isAdmin: any,
}

user = {
    name: "Lucas",
    color: "red",
    isAdmin: 'false',
}

console.log(user);
