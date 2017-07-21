import React, { Component } from "react";
import Skycons from "react-skycons";
import styles from "./styles.css.js";
import PropTypes from "prop-types";
import { skyconify } from "../../helpers/skycons-helper.js";
import { determineBackground } from "../../helpers/backgrounds-helper.js";

class WeatherHeader extends Component {
  render() {
    return (
      <div>
        <div className="uk-card-media-top uk-cover-container uk-height-medium">
          <img
            id="main-background"
            src={determineBackground(this.props.icon)}
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
                    icon={skyconify(this.props.icon)}
                    style={styles.canvasSize}
                  />
                </span>
                <div id="current-temp-container">
                  <h2>
                    {this.props.temperature}°C
                  </h2>
                </div>
                <p id="current-date">
                  {this.props.dateTime}
                </p>
              </div>
              <div className="uk-spinner" data-uk-spinner />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeatherHeader.propTypes = {
  temperature: PropTypes.number.isRequired,
  dateTime: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default WeatherHeader;
