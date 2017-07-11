import React, { Component } from "react";
import WeatherHeader from "../WeatherHeader/WeatherHeader.js";
// import styles from "./styles.css.js";

class WeatherSection extends Component {
  render() {
    return (
      <div className="uk-card uk-card-secondary uk-box-shadow-large">
        <WeatherHeader temperature={21} />
      </div>
    );
  }
}

export default WeatherSection;
