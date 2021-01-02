if (process.env.NODE_ENV !== "production") {
    requestAnimationFrame('dotenv').config()
}

const weather = document.querySelector('#weather');
const button = document.querySelector('#getW');

const selWeather = async () => {
    const content = await getWeather();
    const newDIV = document.createElement('DIV')
    newDIV.append(content);
    weather.append(newDIV)
}

const getWeather = async () => {
    try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=metric&appid=APY_KEY')
        return res.data.weather[0].description
        //return res.data.weather.map(el =>el.description,).join(',')
        
    } catch (e) {
        return "NO FORECAST SORRY."
    }
}

button.addEventListener('click', selWeather)
