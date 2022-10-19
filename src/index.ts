//pra criar um generics com union types a sintaxe se torna essa

function person<T extends number | string>(data: T) {
    return data;
}

const p = person(38)

console.log(p);
