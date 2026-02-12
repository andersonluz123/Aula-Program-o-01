// Armazenando uma função em variavel
const imprimirSoma = function (a, b) {
    console.log( a + b)
}

imprimirSoma(2, 3)

// Amazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b 
}

console.log(soma(2, 3))

//retorno implicito 
const subtracao = (a, b) => a - b 
console.log(subtracao(2, 3))