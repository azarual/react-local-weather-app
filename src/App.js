import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherSection from "./components/WeatherSection/WeatherSection.js";
import { getData } from "./helpers/get-position.js";

class App extends Component {
  constructor(props) {
    super(props);
    getData();
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    if (sessionStorage.coordinates !== "") {
      this.setState({
        isReady: true,
        userPosition: {
          lat: JSON.parse(sessionStorage.coordinates).lat,
          long: JSON.parse(sessionStorage.coordinates).long
        }
      });
    }
  }
  render() {
    return (
      <div className="uk-section uk-light container--main">
        <div className="uk-container">
          <h3>
            <span>
              <img className="App-logo" src={logo} alt="Logo" />
            </span>
            Local Weather React App
          </h3>

          <div className="uk-text-center uk-grid">
            <div className="uk-width-1-3@m">
              {this.state.isReady &&
                <WeatherSection
                  loading={this.state.isReady}
                  lat={this.state.userPosition.lat}
                  long={this.state.userPosition.long}
                />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
