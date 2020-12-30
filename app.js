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
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=metric&appid=78a2a4d9ed7cc6f22a6e37eff3421035')
        return res.data.weather[0].description
        
    } catch (e) {
        return "NO FORECAST SORRY."
    }
}

button.addEventListener('click', selWeather)
