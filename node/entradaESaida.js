const anonimo = process.argv.indexOf('--anonimo') !== -1

if (anonimo) {
    process.stdout.write('Olá, usuário anônimo!\n')
    process.exit()
}else {
    process.stdout.write('Olá, usuário!\n')
   process.stdin.on('data', (data) => {
        const nome = data.toString().trim()

        process.stdout.write(`Olá, ${nome}!\n`)
        process.exit()
    })

}