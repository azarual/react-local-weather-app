import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import uikitCss from "uikit/dist/css/uikit.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

UIkit.use(Icons);