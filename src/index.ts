//criar uma interface

//sintaxe =
//<"LEtra">, ex: <T>, <G>
//depois na variavel da interface por a letra que utilizou, se usou <T> usar o T;
//depois do tipo do objeto criado a partir da interface usar <tipo>, ex: <string>
//na atribuição do objeto precisasse coincidir com o tipo, se nao vai dar erro   TS2322: Type 'string[]' is not assignable to type 'number'.
interface UserInterface<T> {
    name: string,
    age: number,
    data: T,
}

//criar um objeto

const person: UserInterface<number> = {
    name: "ALexandre",
    age: 39,
    data: ['alexandre', 'tete', 'dificil']
};

//problema: no data não sabemos o tipo que vamos trabalhar, e o generics soluciona isso


console.log(person);
