import React, { Component } from "react";
import "./App.css";
import WeatherSection from "./components/WeatherSection/WeatherSection.js";
import { getPosition } from "./helpers/get-position.js";

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    getPosition(geoOptions)
      .then(result => {
        this.setState({
          isReady: true,
          coords: {
            lat: result.coords.latitude,
            long: result.coords.longitude
          }
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }
  render() {
    return (
      <div className="uk-section uk-light container--main">
        <div className="uk-container">
          {this.state.isReady
            ? <div className="uk-text-center uk-grid">
                <div className="uk-width-1-3@m">
                  <WeatherSection
                    loading={this.state.isReady}
                    lat={this.state.coords.lat}
                    long={this.state.coords.long}
                  />
                </div>
              </div>
            : <div className="uk-overlay-primary uk-position-cover">
                <div className="uk-position-center">
                  {/* <div className="uk-spinner" data-uk-spinner /> */}
                  <p>Loading</p>
                </div>
              </div>}
        </div>
      </div>
    );
  }
}

export default App;
