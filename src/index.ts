//criar uma interface

interface UserInterface {
    name: string,
    age: number,
    data: string[]
}

//criar um objeto

const person: UserInterface = {
    name: "ALexandre",
    age: 39,
    data: ['alexandre', 'tete', 'dificil']
};

//problema: no data não sabemos o tipo que vamos trabalhar, e o generics soluciona isso


console.log(person);
