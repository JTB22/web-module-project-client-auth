import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="formContainer">
          <label htmlFor="username">Username</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

function Header() {}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
