import React, { Component } from "react";
import WeatherHeader from "../WeatherHeader/WeatherHeader.js";
// import styles from "./styles.css.js";
// import axios from "axios";

class WeatherSection extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="uk-card uk-card-secondary uk-box-shadow-large">
        <WeatherHeader temperature={21} />
        <p>
          {this.props.lat}
        </p>
        <p>
          {this.props.long}
        </p>
      </div>
    );
  }
}

export default WeatherSection;
