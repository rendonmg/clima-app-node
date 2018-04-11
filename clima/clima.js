const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f683ab62fad1a3cf38047792d9168c17 `)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}