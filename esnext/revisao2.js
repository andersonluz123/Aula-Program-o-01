// Arrow Functions
const soma = (a, b) => a + b
console.log(soma(2, 3))
// Arrow Function (this)
const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind({}) // bind cria um novo contexto para a função
lexico2() // false, pois o contexto foi alterado
lexico()

// Parâmetros padrão
function log(texto = 'Node') {
    console.log(texto)
}

log() // Node
log('Sou mais forte!')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))