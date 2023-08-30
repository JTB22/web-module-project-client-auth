import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { addFriend, handleChange } from "../actions/FriendsActions";

function AddFriend(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fireAddFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: props.newFriend.name,
      age: props.newFriend.age,
      email: props.newFriend.email,
    };
    props.addFriend(newFriend);
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="addFriend">
      <h2>Add Friend</h2>
      <form>
        <div className="formContainer">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => props.handleChange(e)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            onChange={(e) => props.handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => props.handleChange(e)}
          />
          <button
            type="submit"
            onClick={(e) => fireAddFriend(e)}
            disabled={props.isLoading && true}
          >
            Add Friend
          </button>
        </div>
      </form>
      {props.isLoading && <p>Loading...</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newFriend: state.friendsReducer.newFriend,
    isLoading: state.friendsReducer.isLoading,
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps, { addFriend, handleChange })(AddFriend);
