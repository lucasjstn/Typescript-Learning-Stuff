//sinal de exclamação no final admite que o tipo da variavel não inclui o tipo nulo

const form = document.querySelector('form')!;

// const link = document.querySelector('a')!;

//com isso o elemento fica generico
const link = document.querySelector('my-link');

//qual o problema de trabalhar com o sinal de exclamação ou sem
link.addEventListener('click', () => {
    console.log("CLick");

})
