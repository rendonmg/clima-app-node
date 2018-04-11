const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyBnwhI88f4BsoXz0Lic1wKKS-slui8gyEY`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    //console.log(resp);
    //console.log(resp.data); //data completa
    //console.log(JSON.stringify(resp.data, undefined, 2)); //con el stringify se puede ver el contenido de los arrays en consola
    //console.log(resp.status); //estado del request, 200 = OK

    let location = resp.data.results[0];
    //let latitud = resp.data.results[0].geometry.location.lat;
    //let longitud = resp.data.results[0].geometry.location.lng;
    let latitud = location.geometry.location.lat;
    let longitud = location.geometry.location.lng;

    return {
        direccion: location.formatted_address,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}