import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <App />
  </Router>
);
