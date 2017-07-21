import React, { Component } from "react";
import styles from "./styles.css.js";
import SingleDay from "../SingleDay/SingleDay.js";

class ForecastSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastWeek: this.props.forecastWeek
    };
  }
  render() {
    return (
      <div className="uk-card-body" style={styles.forecastBackground}>
        <h4 className="uk-card-title">
          {this.state.forecastWeek.summary}
        </h4>
        {this.state.forecastWeek.data.map((day, index) => {
          return <SingleDay key={index} thisDay={day} />;
        })}
      </div>
    );
  }
}

export default ForecastSection;
