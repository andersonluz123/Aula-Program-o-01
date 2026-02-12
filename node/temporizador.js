const scheduler = require('node-schedule');

const tarefa = scheduler.scheduleJob('*/5 * 12 * * 2', function() {
    console.log('Executando a tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa.cancel()
    console.log('Cancelando a tarefa 1!')
}, 20000)

const regra = new scheduler.RecurrenceRule()
regra.dayOfWeek = [new scheduler.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = scheduler.scheduleJob(regra, function() {
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})