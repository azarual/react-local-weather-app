import UIkit from "uikit";

let userPosition = {
  lat: "",
  long: ""
};

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      savePosition,
      fallbackPosition,
      geoOptions
    );
    return true;
  } else {
    console.error("Geolocation is not supported by this browser");
    return false;
  }
}

function fallbackPosition() {
  console.log("Fallback function to obtain user position");
}

function savePosition(position) {
  var crds = position.coords;
  userPosition.lat = crds.latitude;
  userPosition.long = crds.longitude;
  if (!sessionStorage["coordinates"]) {
    sessionStorage["coordinates"] = JSON.stringify(userPosition);
    if (JSON.parse(sessionStorage.coordinates).lat !== "") {
      console.log("%clocation saved successfully", "color: lightgreen;");
      UIkit.notification("Location saved successfully", {
        status: "success",
        pos: "bottom-right"
      });
      // console.log(JSON.parse(sessionStorage.coordinates));
      // getWeather();
    } else {
      console.error("couldn't save location data");
      UIkit.notification("Couldn't save location data", {
        status: "danger",
        pos: "bottom-right"
      });
    }
  } else {
    console.log("%ccoordinates already stored", "color: lightgreen;");
    UIkit.notification("Coordinates already stored", {
      status: "success",
      pos: "bottom-right"
    });
    // console.log(JSON.parse(sessionStorage.coordinates));
    // getWeather();
  }
}

export { getData };
