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
      isReady: false,
      coords: {
        lat: "Loading",
        long: "Loading"
      },
      weather: null
    };
  }
  componentDidMount() {
    function composeRequest(key, lat, long) {
      return `https://crossorigin.me/https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`;
    }
    getPosition(geoOptions)
      .then(result => {
        // console.log(result);
        this.setState({
          coords: {
            lat: result.coords.latitude,
            long: result.coords.longitude
          }
        });
        // console.log(result.coords);
        return result.coords;
      })
      .then(result => {
        axios
          .get(composeRequest(KEY, result.latitude, result.longitude))
          .then(responseData => {
            this.setState({
              weather: responseData
            });
            console.log(responseData.data);
            return responseData.data;
          })
          .catch(error => {
            console.log(error);
          });
        // console.log(result);
        // return result;
      })
      .then(
        this.setState({
          isReady: true
        })
      )
      .catch(err => {
        console.error(err.message);
      });
  }
  render() {
    const isReady = this.state.weather;
    return isReady
      ? <div className="uk-section uk-light container--main">
          <div className="uk-container">
            <div className="uk-text-center uk-grid">
              <div className="uk-width-1-3@m">
                <WeatherSection
                  forecastCurrent={this.state.weather.data.currently}
                />
              </div>
            </div>
          </div>
        </div>
      : <p>Loading</p>;
  }
}

export default App;
