const imprimerResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Nota Inválida')
    }
}


imprimerResultado(10)
imprimerResultado(9)
imprimerResultado(8)
imprimerResultado(7)
imprimerResultado(6)
imprimerResultado(5)
imprimerResultado(4)
imprimerResultado(3)
imprimerResultado(2)
imprimerResultado(1)