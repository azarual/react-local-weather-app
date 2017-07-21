import React, { Component } from "react";
import WeatherHeader from "../WeatherHeader/WeatherHeader.js";
import moment from "moment";

class WeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: Math.round(this.props.forecastCurrent.temperature),
      currentDate: moment
        .unix(this.props.forecastCurrent.time)
        .format("dddd MMM Do"),
      currentIcon: this.props.forecastCurrent.icon
    };
  }
  render() {
    const isReady = this.state.currentIcon !== undefined;
    return isReady
      ? <div className="uk-card uk-card-secondary uk-box-shadow-large">
          <WeatherHeader
            temperature={this.state.currentWeather}
            dateTime={this.state.currentDate}
            icon={this.state.currentIcon}
          />
        </div>
      : <p>Loading</p>;
  }
}

export default WeatherSection;
