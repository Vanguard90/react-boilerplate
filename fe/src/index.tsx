import React from "react";
import { render } from "react-dom";
import "./scss/uikit.min.css";
import App from "./components/App";

const rootElement = document.querySelector("#root");

render(<App />, rootElement);
