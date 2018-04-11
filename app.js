const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require("./config/yargs").argv;

//console.log(argv.direccion);

let getInfo = async(dir) => {
    try {
        let coors = await lugar.getLugarLatLng(dir);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion } es de ${ temp } grados celsius`
    } catch (e) {
        return `No se pudo determinar el clima en ${ dir }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e))

// clima.getClima(6.244203, -75.5812119)
//     .then(resp => {
//         console.log("Temperatura: ", resp);
//     })
//     .catch(e => console.log(e))