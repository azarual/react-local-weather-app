import React, { Component } from "react";
import styles from "./styles.css.js";

class ForecastSection extends Component {
  render() {
    return (
      <div className="uk-card-body" style={styles.forecastBackground}>
        <h3 className="uk-card-title">Weekly Forecast</h3>
      </div>
    );
  }
}

export default ForecastSection;
