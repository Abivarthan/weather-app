function search(){
    let place=document.querySelector(".search-place").value.trim()
    if (!place) {
        alert("Please enter a location.");
        return;
    } 
    let degree=document.getElementById("degree")
    let city=document.getElementById("place")
    let climate=document.getElementById("climate")
    let datetime=document.getElementById("date-time")
    let iconContainer = document.getElementById("climate-image")
    let humidity=document.querySelector(".humidity")
    let windspeed=document.querySelector(".wind-speed")
    let maincontainer=document.querySelector(".container")
    let loading=document.getElementById("loading")
    iconContainer.innerHTML = ""
    loading.style.display="block"
    let fetchapi=fetch(`https://api.weatherapi.com/v1/current.json?key=afcefd8a9eeb4e0f9ee62025251601&q=${place}&aqi=no`)
    fetchapi.then(result => result.json()).then(output =>{
        console.log(output)
        // Here i get the all the required details from the api by using fetch and stored in the variable and used
        let name=output.location.name
        let temp=output.current.temp_c
        let weather=output.current.condition.text
        let icon=output.current.condition.icon
        let DateTime=output.current.last_updated
        let Humidity=output.current.humidity
        let Windspeed=output.current.wind_kph
        degree.textContent=temp+"°C"
        city.textContent=name
        climate.textContent=weather
        datetime.textContent=DateTime
        humidity.textContent="Humidity : "+ Humidity+"%"
        windspeed.textContent="WindSpeed : "+Windspeed+"kph"
        let image = document.createElement("img");
        image.src = `https:${icon}`;
        image.alt = `Weather icon for ${weather}`;
        iconContainer.append(image);
        console.log(weather);
        if(weather=="Sunny"){
            maincontainer.style.backgroundImage = "url('sunny.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if(weather=="Clear"){
            maincontainer.style.backgroundImage = "url('clear.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if(weather=="Partly cloudy"||weather=="Cloudy"||weather=="Overcast"||weather=="Mist"||weather=="Fog"||weather=="Freezing fog"){
            maincontainer.style.backgroundImage = "url('mist.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if(weather=="Patchy rain possible"|| 
            weather == "Patchy light drizzle" || 
            weather == "Light drizzle" || 
            weather == "Patchy light rain" || 
            weather == "Light rain" || 
            weather == "Moderate rain at times" || 
            weather == "Moderate rain" || 
            weather == "Heavy rain at times" || 
            weather == "Heavy rain" || 
            weather == "Light rain shower" || 
            weather == "Moderate or heavy rain shower" || 
            weather == "Torrential rain shower"
          ){
            maincontainer.style.backgroundImage = "url('rainy.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if(weather == "Patchy snow possible" ||
            weather == "Patchy light snow" ||
            weather == "Light snow" ||
            weather == "Patchy moderate snow" ||
            weather == "Moderate snow" ||
            weather == "Patchy heavy snow" ||
            weather == "Heavy snow" ||
            weather == "Light snow showers" ||
            weather == "Moderate or heavy snow showers" ||
            weather == "Patchy light snow with thunder" ||
            weather == "Moderate or heavy snow with thunder"){
            maincontainer.style.backgroundImage = "url('snow.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if( weather == "Patchy sleet possible" || 
            weather == "Light sleet" || 
            weather == "Moderate or heavy sleet" || 
            weather == "Light sleet showers" || 
            weather == "Moderate or heavy sleet showers" || 
            weather == "Ice pellets" || 
            weather == "Light showers of ice pellets" || 
            weather == "Moderate or heavy showers of ice pellets" || 
            weather == "Patchy freezing drizzle possible" || 
            weather == "Freezing drizzle" || 
            weather == "Heavy freezing drizzle" || 
            weather == "Light freezing rain" || 
            weather == "Moderate or heavy freezing rain"
          ){
            maincontainer.style.backgroundImage = "url('icy-weather.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
        else if(weather == "Thundery outbreaks possible" || 
            weather == "Blizzard" || 
            weather == "Blowing snow" || weather == "Patchy light rain with thunder" || 
            weather == "Moderate or heavy rain with thunder"){
            maincontainer.style.backgroundImage = "url('thunder-strom.jpg')";
            maincontainer.style.backgroundRepeat="no-repeat";
            maincontainer.style.backgroundSize="cover";
            maincontainer.style.backgroundPosition="center";
        }
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the location name.");
    })
    .finally(()=>{
    loading.style.display="none"
    });
}
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("nav-active");
}

