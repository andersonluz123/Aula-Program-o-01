// Função em JS é first-class object (Citizens)
// higher-order function

//criar de forma literal
function fun1() { }

//Amarzenar em uma variável
const fun2 = function () { }

//Amazenar em uma array
const array = [function (a, b){ return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//amarzenar em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar função como param
function run (fun){
    fun()
}

run(function () { console.log('Executando...') })

//um função pode retornar/conter um função
function soma (a, b) {
    return function (c) {
        console.log(a +b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)