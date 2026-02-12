const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduloB = require('../../moduloB')
console.log(moduloB.bomDia)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bon dia')
    res.end()
}).listen(8080)
