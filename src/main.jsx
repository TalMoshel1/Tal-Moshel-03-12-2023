import React from "react";
import { Provider, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./data/store.js";


/* 

import order : 


Library
style
json
components
helpers
hooks and functions

*/


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);
