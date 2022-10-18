// function person(a: string, b: number): number;

// Function implementation is missing or not immediately following the declaration.


//é como se fosse uma assinatura
function person(a: string, b: number): number;
//----

//se tentar escrever uma overload com outro tipo
// function person(name: boolean, b: number) {
//     return b;
// }

// This overload signature is not compatible with its implementation signature.

// function person(name: string, age: number) {
//     //como ta retornando string e no molde está pra ser retornado um numero vai dar o mesmo erro de overload

//     // This overload signature is not compatible with its implementation signature.
//     return name;
// }

//isso vai funcionar
function person(name: string, age: number) {
    return age;
}

console.log(person('Lucas', 23));



