import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="uk-section uk-section-medium uk-section-secondary uk-light"
        id="links"
      >
        <div className="uk-container uk-container-small uk-text-center">
          <a
            href="https://github.com/paweltar/react-local-weather-app"
            className="uk-button uk-button-default uk-width-1-2 uk-width-1-3@s uk-margin-small-bottom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />
          <a
            href="http://paweltargonski.pl/"
            className="uk-button uk-button-default uk-width-1-2 uk-width-1-3@s uk-margin-small-bottom"
            target="_blank"
            rel="noopener noreferrer"
          >
            My website
          </a>
          <hr className="uk-divider-icon" />
          <p className="uk-text-small uk-text-muted">Paweł Targoński 2017</p>
          <p>
            <a
              href="https://darksky.net/poweredby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Dark Sky
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
