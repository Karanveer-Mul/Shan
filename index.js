//https://www.weather.gov/documentation/services-web-api&sa=D&source=calendar&ust=1641768438693965&usg=AOvVaw3OWCV8Z2DjkIpuF6eXz_L2

async function getWeatherReport () {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const dayTime = document.getElementById("dayTime").value;

    const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
    const jsonResponse = await response.json();
    const propertiesAPI = await jsonResponse.properties; 
    const forecastAPI = await propertiesAPI.forecast;
    const weekForecastData = await fetch(forecastAPI);
    const jsonWeekForecastData = await weekForecastData.json();
    
    const periods = await jsonWeekForecastData.properties.periods;
    
    for (const period of periods) {
        if (period.name === dayTime) {
            document.getElementById("info").innerText = period.temperature;
        }
    }
}