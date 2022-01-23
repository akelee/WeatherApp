let weather = {//need api key to access api
    "apiKey":  "56d5dae8d8cb69cac7429adf12e16d13", 
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind; //taken out of object and turned into variable
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
document.querySelector(".weather").classList.remove("loading");//to hide wrong info before page loads
document.body.style.backgroundImage =//city-specific img
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
    .querySelector(".search button")
    .addEventListener('click', function () {
        weather.search();
});

weather.fetchWeather("Bratislava")

//run search when enter button is clicked
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})
