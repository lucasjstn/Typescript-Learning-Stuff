/** let user: {
    name: string,
    age: number;
    color?: string;
    isAdmin?: boolean,
}

nome e interrogação faz a propriedade ser opcional

user = {
    name: 'lucas',
    age: 23,
    color: 'blue'
}

console.log(user); **/
//=============================
//DA PRA FAZER O MESMO COM FUNÇÕES
// function person(name: string, age: number, color: string, isAdmin: boolean) {
// }
// person('lucas', 23, true)
// Expected 4 arguments, but got 3.
// A required parameter cannot follow an optional parameter.
//os parametros opcionais precisam estar nas ultimas colocações
function person(name, age, isAdmin, color) {
}
person('lucas', 23, true);
