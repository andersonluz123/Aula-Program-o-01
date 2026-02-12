Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimerResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Reprovado')
    } else if(nota.entre(0, 3.99)) {
        console.log('Nota Inválida')
    }
}

imprimerResultado(10)
imprimerResultado(1)
imprimerResultado(6)
imprimerResultado(8)
imprimerResultado(9)