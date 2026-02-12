const tecnologias = new Map() 
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false }

const chaveVariadas = new Map([
  [function() {}, 'funcao'],
  [{}, 'objeto'],
  [123, 'numero'],
  [true, 'booleano']
])

chaveVariadas.forEach((valor, chave) => {
  console.log(chave, valor)
})

console.log(chaveVariadas.get(123)) // 'numero'
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123)) // false
console.log(chaveVariadas.size) // 3