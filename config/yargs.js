//el options sirve para incluir opciones dentro de la llamada sin necesidad de antecederlas de un comando
//específico, como el de la lista de tareas (crear, listar...)
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}