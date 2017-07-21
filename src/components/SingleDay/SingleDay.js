import React, { Component } from "react";
import Skycons from "react-skycons";
import styles from "./styles.css.js";
import PropTypes from "prop-types";
import { skyconify } from "../../helpers/skycons-helper.js";
import { determineBackground } from "../../helpers/backgrounds-helper.js";
import moment from "moment";

class SingleDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisDay: this.props.thisDay
    };
  }
  render() {
    return (
      <div
        className="uk-card uk-border-rounded uk-card-secondary uk-grid-collapse uk-margin"
        data-uk-grid
        style={styles.cardGray}
      >
        <div className="uk-card-media-left uk-cover-container uk-width-1-3">
          <img
            src={determineBackground(this.state.thisDay.icon)}
            alt="Background"
            data-uk-cover
          />
          <canvas width="600" height="400" />
          <div className="uk-overlay-primary uk-position-cover">
            <div className="uk-position-center uk-text-center uk-padding">
              <span>
                <Skycons
                  color="white"
                  icon={skyconify(this.state.thisDay.icon)}
                  style={styles.canvasSize}
                />
              </span>
              <p>
                {moment.unix(this.state.thisDay.time).format("dddd MMM Do")}
              </p>
            </div>
          </div>
        </div>
        <div className="uk-width-2-3">
          <div className="uk-card-body">
            <div className="switcher-container">
              <h3 className="uk-card-title temp-unit temp-unit--si">
                {Math.round(this.state.thisDay.temperatureMin)}°C -{" "}
                {Math.round(this.state.thisDay.temperatureMax)}°C
              </h3>
            </div>
            <p>
              {this.state.thisDay.summary}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SingleDay.propTypes = {
  thisDay: PropTypes.object.isRequired
};

export default SingleDay;
