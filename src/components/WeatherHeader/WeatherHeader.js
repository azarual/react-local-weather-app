import React, { Component } from "react";
import Skycons from "react-skycons";
import styles from "./styles.css.js";

class WeatherHeader extends Component {
  render() {
    return (
      <div className="uk-card-media-top uk-cover-container uk-height-medium">
        <img
          id="main-background"
          src="https://res.cloudinary.com/da8t1tjca/image/upload/v1497453015/lightning-storm-weather-sky-53459_xrf0ej.jpg"
          alt="Background"
          data-uk-cover
        />
        <div className="uk-overlay-primary uk-position-cover">
          <div
            className="uk-position-center uk-text-center uk-padding"
            id="current-data-section"
          >
            <div id="current-data">
              <span>
                <Skycons
                  color="white"
                  icon="CLEAR_DAY"
                  style={styles.canvasSize}
                />
              </span>
              <div id="current-temp-container">
                <h2>21°C</h2>
              </div>
              <p id="current-date">Monday Jul 10th</p>
            </div>
            <div className="uk-spinner" data-uk-spinner />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherHeader;
