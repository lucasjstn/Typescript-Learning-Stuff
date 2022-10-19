//pra criar um  valor padrão adiciona um operador = e o tipo desejado

function person<T extends number | string = string>(data: T) {
    return data;
}
//voce consegue colocar um tipo numero também como especificado no union type porém ao passr o mouse o parametro pedido sera do tipo padrao, no caso string
const p = person('2')

console.log(p);
