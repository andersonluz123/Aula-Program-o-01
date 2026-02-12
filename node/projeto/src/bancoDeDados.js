let id = 1

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = id++
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }