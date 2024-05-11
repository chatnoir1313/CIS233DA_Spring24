// JavaScript code to toggle city list
function toggleCityList() {
    var cityList = document.getElementById("cityList");
    if (cityList.style.display === "none" || cityList.style.display === "") {
        cityList.style.display = "block";
    } else {
        cityList.style.display = "none";
    }
}

// Call toggleCityList function when the page loads to show the city list initially
window.onload = function() {
    toggleCityList();
};

// JavaScript function to fetch weather data for a specific city
function getWeather(cityName) {

    const apiKey = "0af6cf9c6816c8368364f39b70efa843";

    // API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the weather information section for the selected city
            const weatherInfoSection = document.getElementById("weatherInfo");
            weatherInfoSection.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            `;

            // Call displayCityImages to display images for the selected city
            displayCityImages(cityName);

            // Call displayCityFacts to display facts for the selected city
            displayCityFacts(cityName);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });

    // Hide the city list after selecting a city
    const cityList = document.getElementById("cityList");
    cityList.style.display = "none";
}


// Define city images
const cityImages = {
    Chicago: [
        "./assets/Chicago/Food_HighRes.jpg",
        "./assets/Chicago/MilleniumPark_HighRes.jpg",
        "./assets/Chicago/Skyline_HighRes.jpg",
        "./assets/Chicago/NightSkyline_HighRes.jpg",
        "./assets/Chicago/History_HighRes.jpg",
    ],
    Santiago: [
        "./assets/Santiago/Food_HighRes.jpg",
        "./assets/Santiago/History_HighRes.jpg",
        "./assets/Santiago/Nature_HighRes.jpg",
        "./assets/Santiago/Nature2_HighRes.jpg",
        "./assets/Santiago/Skyline_HighRes.jpg",
    ],
    Cairo: [
        "./assets/Cairo/Agriculture_HighRes.jpg",
        "./assets/Cairo/Food_HighRes.jpg",
        "./assets/Cairo/History_HighRes.jpg",
        "./assets/Cairo/Nature_HighRes.jpg",
        "./assets/Cairo/Skyline_HighRes.jpg",
    ],
    Johannesburg: [
        "./assets/Johannesburg/Agriculture_HighRes.jpg",
        "./assets/Johannesburg/Food_HighRes.jpg",
        "./assets/Johannesburg/History_HighRes.jpg",
        "./assets/Johannesburg/Nature_HighRes.jpg",
        "./assets/Johannesburg/Skyline_HighRes.jpg",
    ],
    Kyoto: [
        "./assets/Kyoto/Agriculture_HighRes.jpg",
        "./assets/Kyoto/Food_HighRes.jpg",
        "./assets/Kyoto/History_HighRes.jpg",
        "./assets/Kyoto/Nature_HighRes.jpg",
        "./assets/Kyoto/Skyline_HighRes.jpg",
    ]
};

// JavaScript function to display city images
function displayCityImages(cityName) {
    const section1 = document.getElementById("section1");
    section1.innerHTML = ""; // Clear existing content
    
    const images = cityImages[cityName];
    images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = cityName;
        img.style.width = "20%";
        img.style.margin = "10px auto"; // Center the image horizontally and add margin to the top and bottom

        section1.appendChild(img);
    });
}


const cityFacts = {
    Chicago: [
        "Chicago cozies up to the southwest end of Lake Michigan, boasting lake views year-long.",
        "It is the third most populous city in the U.S., after New York City and Los Angeles.",
        "Known for its architecture, including the Willis Tower and John Hancock Center.",
        "Home to famous museums like the Art Institute of Chicago and the Field Museum.",
        "Renowned for its deep-dish pizza and hot dogs.",
    ],
    Santiago: [
        "Capital and largest city of Chile since 1541, located in the central valley.",
        "Features landmarks like the Plaza de Armas and the Cerro San Cristóbal hill.",
        "Known for its vibrant cultural scene and lively neighborhoods.",
        "Due to the unique geography of the country, skiing and surfing on the same weekend is a possibility.",
        "The city is located on the Pacific Ring of Fire, which results in a high frequency of earthquakes. In response to this the city has implemened strict building codes."
    ],
    Cairo: [
        "Largest city in Egypt, situated on the Nile River.",
        "Famous for its ancient monuments, including the Pyramids of Giza and the Sphinx.",
        "Home to the Egyptian Museum, showcasing artifacts from ancient Egypt.",
        "Cairo has the oldest and largest film and music industry in the Arab world, as well as Egypt's oldest institution of higher learning, Al-Azhar University.",
        "Cairo, as well as neighbouring Giza, has been established as Egypt's main centre for medical treatment, and despite some exceptions, has the most advanced level of medical care in the country.",
    ],
    Johannesburg: [
        "Largest city in South Africa, known as the economic powerhouse of Africa.",
        "Features attractions like the Apartheid Museum and Constitution Hill.",
        "Surrounded by natural beauty, including the Cradle of Humankind.",
        "Winter is the sunniest time of the year, with mild days and cool nights, dropping to 4.1 °C (39.4 °F) in June and July.",
        "Johannesburg is a cultural hub in South Africa and has a wide variety of cultural venues, making it a prominent area for many creative and cultural industries.",

    ],
    Kyoto: [
        "Former imperial capital of Japan, known for its classical Buddhist temples. Roughly contains 2,000 temples and shrines.",
        "Features landmarks like the Kinkaku-ji and Fushimi Inari-taisha shrines.",
        "Renowned for its traditional tea houses and gardens.",
        "The city has closed many of it's alleys to outside visitors due to the behavior of tourist.",
        "Kyoto suffered only minor damage in World War II, as it was removed from the atomic bomb target list (which it had headed) by the personal intervention of Secretary of War Henry L. Stimson, as Stimson wanted to save this cultural center."
    ]
};

function displayCityFacts(cityName) {
    const cityFactsContainer = document.getElementById("cityFacts");
    cityFactsContainer.innerHTML = ""; // Clear existing content

    const facts = cityFacts[cityName];
    facts.forEach(fact => {
        const li = document.createElement("li");
        li.textContent = fact;
        cityFactsContainer.appendChild(li);
    });
}
