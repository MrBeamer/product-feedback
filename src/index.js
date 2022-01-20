import React from "react";
import { FeedbackProvider } from "./utility/FeedbackContext";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
