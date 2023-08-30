import React, { useEffect } from "react";
import axios from "axios";
import { handleChange, login } from "../actions/LoginActions";
import { connect } from "react-redux";
import { navLogin } from "../actions/LoginActions";

function Login(props) {
  //   const handleChanges = (e) => {
  //     setCredentials({
  //       ...credentials,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const login = (e) => {
  //     e.preventDefault();
  //     console.log(credentials);
  //     axios
  //       .post("http://localhost:9000/api/login", credentials)
  //       .then((res) => {
  //         console.log(res.data);
  //         localStorage.setItem("token", res.data.token);
  //         setCredentials(initialState);
  //         navigate("/friendList");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      username: props.username,
      password: props.password,
    };
    props.login(credentials);
  };

  useEffect(() => {
    props.navLogin();
  }, []);
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="formContainer">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            onChange={(e) => props.handleChange(e)}
            value={props.username}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => props.handleChange(e)}
            value={props.password}
          />
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </div>
      </form>
      {props.error && <p className="error">{props.error.message}</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    isLoading: state.loginReducer.isLoading,
    success: state.loginReducer.success,
    error: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, { handleChange, login, navLogin })(
  Login
);
