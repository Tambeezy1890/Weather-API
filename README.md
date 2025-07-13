# 🌤️ Weather App

This is a simple weather web application that fetches **live weather data** from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it based on the city name entered by the user.

---

##  Features

- Search weather by **city name**
- Displays:
  - 🌡 Temperature (°C)
  - 💧 Humidity
  - 🌦 Description of weather
  - 🌤 Emoji representing weather condition
- Changes **background image** based on the current weather
- Shows **animated rain particles** when it's raining
- Friendly **error messages** if a city isn't found

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/current)
- [Particles.js](https://vincentgarreau.com/particles.js/)

---

## 📸 Screenshots

<img width="1470" height="956" alt="Untitled" src="https://github.com/user-attachments/assets/c7ac0d78-b2d6-4d52-b64b-519b3b4f3b5b" />

<img width="1470" height="956" alt="Untitled5" src="https://github.com/user-attachments/assets/6a5f2e53-128e-4754-ac56-ebdf32d9a968" />
<img width="1470" height="956" alt="Untitled2" src="https://github.com/user-attachments/assets/ab75caea-5f46-4598-aaef-ed9f70d50f18" />

---

## 💡 How It Works

1. User types a city name and submits the form
2. An API call is made to OpenWeatherMap
3. Weather data is extracted and shown on the page
4. The background and emoji change depending on weather condition
5. Rain triggers particles animation for extra flair I used chat gpt to code this part becuase i have no knowledge using particle.js

---

## 📁 Project Structure
weather-app/
├── index.html
├── style.css
├── script.js
├── images/
│ ├── clear.jpeg
│ ├── cloudy.jpeg
│ ├── rainy.jpeg
│ └── snowy.jpeg
├── particles.js
└── README.md

## 📌 Notes

- The API key is stored directly in the JavaScript file (for learning/demo purposes only) and shall be deactivated once this project has been uploaded
- In real-world apps, use a `.env` file and never expose your API key publicly

---

## 🧠 What I Learned

- How to fetch and display data from an external API
- DOM manipulation with JavaScript
- Parsing JSON data
- Creating and styling elements dynamically
- Handling user errors gracefully
- Applying dynamic styling and animations based on data

---

## 📬 Contact

- GitHub: [Tambeezy1890](https://github.com/your-github-Tambeezy1890)
- Email: [Tambowoneyi06@gmail.com]

---

## 📝 License

Free to use for educational and learning purposes.
