// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetros de função

// usar spread com arrays e objetos
const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupofinal = ['Ana', 'Carlos', ...grupoA, 'Rafaela']
console.log(grupofinal)