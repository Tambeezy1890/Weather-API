const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".city");
const apiKey = "2304146b87e1d82779d13cc6a0178afc"
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();
    if(cityInput.value){
        try{
            const city  = cityInput.value;
            const data = await getWeatherData(city);
            displayWeatherData(data);
        }catch(error){
            console.error(error);
        }
        
    }else{
        displayError("Please Enter a city");
    }
});
async function getWeatherData(city){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if(!response.ok){
        throw new Error("City not found or network issue");
;
    }
    const data = await response.json();
    console.log(data);
    return data;
}
function displayWeatherData(data){
    const {name: city,
         weather: [{description,id}],
         main: {temp,humidity}} = data
         card.textContent = "";
         card.style.display = "block";

         const cityDisplay = document.createElement("h1");
         const tempDisplay = document.createElement("p");
         const humid = document.createElement("p");
         const desc = document.createElement("p");
         const weatherEmoji = document.createElement("p");

         cityDisplay.textContent = city
         tempDisplay.textContent = `${temp}°C`;
         humid.textContent = humidity;
         desc.textContent = description;
         weatherEmoji.textContent = getWeatherEmoji(id);
        
         
         cityDisplay.classList.add("city");
         tempDisplay.classList.add("temp");
         humid.classList.add("temp");
         desc.classList.add("description");
         weatherEmoji.classList.add("weather");
         
        
         card.appendChild(cityDisplay);
         card.appendChild(tempDisplay);
         card.appendChild(humid);
         card.appendChild(desc);
         card.appendChild(weatherEmoji);
         setWeatherBackground(description);
}
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error")
    card.textContent = "";
    card.style.display = "block";
    card.appendChild(errorDisplay);
}
function setWeatherBackground(condition) {
  const body = document.body;
  const lower = condition.toLowerCase();
  const particles = document.getElementById("particles-js");

  // Only show particles for rain
  if (lower.includes("rain")) {
    particles.style.display = "block";
  } else {
    particles.style.display = "none";
  }

  if (condition.includes("clear")) {
    body.style.backgroundImage = "url('../Prac15/images/clear.jpeg')";
  } else if (condition.includes("cloud")) {
    body.style.backgroundImage = "url('../Prac15/images/cloudy.jpeg')";
  } else if (condition.includes("rain")) {
    body.style.backgroundImage = "url('../Prac15/images/rainy.jpeg')";
  } else if (condition.includes("snow")) {
    body.style.backgroundImage = "url('../Prac15/images/snowy.jpeg";
  } else {
    body.style.backgroundImage = "url('../Prac15/images/clouds.jpeg";
  }
}
function getWeatherEmoji(weatherId){
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"; // Thunderstorm

        case (weatherId >= 300 && weatherId < 400):
            return "🌦️"; // Drizzle

        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; // Rain

        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow

        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"; // Fog, mist, smoke

        case (weatherId === 800):
            return "☀️"; // Clear sky

        case (weatherId === 801):
            return "🌤️"; // Few clouds

        case (weatherId === 802):
            return "⛅"; // Scattered clouds

        case (weatherId === 803 || weatherId === 804):
            return "☁️"; // Broken/overcast clouds

        default:
            return "❓"; // Unknown condition
    }
 }
particlesJS("particles-js", {
  particles: {
    number: { value: 300 },
    shape: { type: "line" },
    opacity: { value: 0.3 },
    size: { value: 2, random: true },
    move: {
      enable: true,
      speed: 10,
      direction: "bottom",
      straight: true,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
});
