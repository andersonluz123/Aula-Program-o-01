console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
}

const obj2 = new obj('cadeira')
const obj3 = new obj('messa')
console.log(obj2)
console.log(obj3)