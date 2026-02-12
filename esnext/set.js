// Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco da Gama')
times.add('Flamengo')
times.add('Fluminense')
times.add('Botafogo')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco da Gama')) // true
console.log(times.has('Vasco')) // false    
console.log(times.has('Flamengo')) // true
console.log(times.has('Fluminense')) // true