import React, { useEffect } from "react";
import Login from "./components/login";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.loggedIn || localStorage.getItem("token")) {
      navigate("/friendList");
    }
  }, [props.loggedIn]);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginReducer.success,
  };
};

export default connect(mapStateToProps, {})(App);
