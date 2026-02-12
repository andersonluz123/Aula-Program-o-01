// uma factory retorna um novo objeto
// Retorna um novo objeto contador a cada chamada
module.exports = () => {
    return {
        valor: 1,
        inc() { 
            this.valor++ 
        }
    }
}
