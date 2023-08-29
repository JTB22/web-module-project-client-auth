import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        setCredentials(initialState);
        navigate("/friendList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="formContainer">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            onChange={(e) => handleChanges(e)}
            value={credentials.username}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => handleChanges(e)}
            value={credentials.password}
          />
          <button type="submit" onClick={(e) => login(e)}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
