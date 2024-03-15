


function getWeather() {
    var city = document.getElementById('search').value;
    var apiKey = '839cd2bed8f35cd4faaa3389a2a1d9a0'; 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            console.log('Error: ' + xhr.status);
            displayError('Failed to fetch weather data. Please try again later.');
        }
    };
    xhr.onerror = function() {
        console.log('Network Error');
        displayError('Network error occurred. Please check your internet connection.');
    };
    xhr.send();
}

// Function to display weather information on the frontend
function displayWeather(data) {
    var weatherCard = document.getElementById('weatherCard');
    weatherCard.innerHTML = `
        <h4 class="mb-0">${data.name}, ${data.sys.country}</h4>
        <p class="display-2 my-3">${data.main.temp}°C</p>
        <p class="mb-2">Feels Like: <strong>${data.main.feels_like} °C</strong></p>
        <h5>${data.weather[0].main}</h5>
    `;
}

// Function to display error message on the frontend
function displayError(message) {
    var weatherCard = document.getElementById('weatherCard');
    weatherCard.innerHTML = `<p>${message}</p>`;
}
