import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="uk-section uk-section-muted container--main">
        <div className="uk-container">
          <h3>
            <span>
              <img className="App-logo" src={logo} alt="Logo" />
            </span>{" "}
            Local Weather React App
          </h3>

          <div className="uk-text-center uk-grid">
            <div className="uk-width-1-3@m">
              <div className="uk-card uk-card-default uk-card-body">1-3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
