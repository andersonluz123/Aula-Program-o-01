// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template Strings
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, t] = 'Cod3r'
console.log(l, e, t)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { nome, preco } = { nome: 'Notebook', preco: 1234.56 }
console.log(nome, preco)