import React, { useState } from "react";
import "../styles/Meteo.css";
import moisture from "../assets/moisture.svg";
import wind from "../assets/wind.svg";
import { Heading, Input } from "@chakra-ui/react";
import { Button, color } from "@chakra-ui/react";
const api = {
  key: "ae2f1f3bfbf77947dcc7eaca3e0ddf3e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Meteo() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if ((evt.key = "Enter")) {
      fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        })
        .catch((error) => errorToast());
    }
  };

  const toasts = document.getElementById("toasts");
  console.log(toasts);
  const notifTxt = "Le nom de la ville est incorrect.";

  function errorToast() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = notifTxt;
    toasts.appendChild(notif);
    setTimeout(() => notif.remove(), 5000);
  }

  return (
    <main>
      <div className="meteo-container">
        <div className="meteo">
          <div className="meteo-search-container search-container">
            <Input
              type="text"
              className="input-meteo inputSearch"
              placeholder="Recherchez une ville"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              size="md"
              w="450px"
              variant="filled"
            />
            <Button
              ml={2}
              colorScheme="blue"
              className="submit-meteo submitSearch"
              onClick={search}
            >
              Envoyer
            </Button>
          </div>
          {typeof weather.main != "undefined" ? (
            <div className="results-container">
              <div className="location-container">
                <Heading mt={12} className="location">
                  {weather.name}, {weather.sys.country}
                </Heading>
                {/* <div className="date">{date}</div> */}
              </div>
              <div className="weather-container">
                <div className="temp">
                  {Math.round(weather.main.temp - 273, 15)}°c
                </div>
                <div className="weather">
                  <p>{weather.weather[0].main}</p>
                </div>
                <div className="more-meteo-infos">
                  <div className="info">
                    <img src={moisture} className="App-logo" alt="logo" />
                    <div>
                      <p>{weather.main.humidity} %</p>
                    </div>
                  </div>
                  <div className="info">
                    <img src={wind} className="App-logo" alt="logo" />
                    <div>
                      <p>{Math.round(weather.wind.speed * 3.6)} kmh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="toasts"></div>
      </div>
    </main>
  );
}

export default Meteo;
