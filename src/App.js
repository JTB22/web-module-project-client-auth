import React, { useEffect } from "react";
import Login from "./components/login";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./actions/LoginActions";
import { clearState } from "./actions/FriendsActions";

function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
    if (props.logOut) {
      props.logout();
      props.clearState();
      navigate("/");
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

export default connect(mapStateToProps, { logout, clearState })(App);
