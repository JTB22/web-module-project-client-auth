import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AddFriend from "./components/AddFriend";
import App from "./App";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"));

const WebError = () => {
  return <h1>404 Not Found</h1>;
};
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<App />} />
      <Route path="/addFriend" element={<AddFriend />} />
      <Route path="*" element={<WebError />} />
    </Routes>
  </Router>
);
