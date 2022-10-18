let person: (a: string, b: number) => number;
//se nao tiver esperando nada usar void
person = (name: string, age: number) => {
    return age;
}

console.log(person("Lucas", 232123));
