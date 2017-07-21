import React from "react";

function Credits() {
  return (
    <div className="uk-section uk-section-media uk-light uk-background-cover uk-padding-small uk-background-fixed section-credits">
      <div className="uk-container">
        <p className="uk-text-center">
          <span>
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
          </span>
          <span>
            <a
              href="https://darksky.net/poweredby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dark Sky
            </a>
          </span>
          <span>
            <a
              href="http://darkskyapp.github.io/skycons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skycons
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Credits;
