import React, { Component } from "react";
import "./App.css";
import WeatherSection from "./components/WeatherSection/WeatherSection.js";
import { getPosition } from "./helpers/get-position.js";
import axios from "axios";

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const KEY = "7cd42dbf8858640bfc81ee3fd9397ea3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    function composeRequest(key, lat, long) {
      return `https://crossorigin.me/https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`;
    }
    if (!sessionStorage.getItem("weatherCache")) {
      console.log("No data is stored locally. Making request to darksky...");
      getPosition(geoOptions)
        .then(result => {
          this.setState({
            coords: {
              lat: result.coords.latitude,
              long: result.coords.longitude
            }
          });
          return result.coords;
        })
        .then(result => {
          axios
            .get(composeRequest(KEY, result.latitude, result.longitude))
            .then(responseData => {
              this.setState({
                weather: responseData
              });
              sessionStorage.setItem(
                "weatherCache",
                JSON.stringify(responseData)
              );
              if (JSON.parse(sessionStorage.weatherCache)) {
                console.log("Response with weather data cached succesfully");
                this.setState({
                  isReady: true
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(err => {
          console.error(err.message);
        });
    } else {
      console.log("Weather data is already stored locally");
      this.setState({
        isReady: true
      });
    }
  }
  render() {
    const isReady = this.state.isReady;
    return isReady
      ? <div className="uk-section uk-light container--main">
          <div className="uk-container">
            <div className="uk-text-center uk-grid">
              <div className="uk-width-1-3@m">
                <WeatherSection
                  forecastCurrent={
                    JSON.parse(sessionStorage.weatherCache).data.currently
                  }
                />
              </div>
            </div>
          </div>
        </div>
      : <p>Loading</p>;
  }
}

export default App;
