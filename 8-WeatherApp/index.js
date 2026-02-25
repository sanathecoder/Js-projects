const apiKey = "c010b776c2d52a1d5ff9d81af6ca252e"
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
async function CheckWeather(city) {
    // const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    const response = await fetch(apiURL + city + `&appid=${apiKey}&units=metric`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        var data = await response.json()
        console.log(data)

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './img/cloud.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './img/rain.png'
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './img/sun.png'
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './img/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './img/mist.png'
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = './img/snow.png'
        }

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'

    }


}



searchBtn.addEventListener('click', () => {
    CheckWeather(searchBox.value)
})