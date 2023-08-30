import React, { useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosAuth";
import { connect } from "react-redux";
import { getFriends } from "../actions/FriendsActions";
import { useNavigate } from "react-router-dom";

const FriendList = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else if (props.friends.length === 0) {
      props.getFriends();
    }
  }, []);
  if (props.error) {
    return <h2>Error: {props.error}</h2>;
  }
  if (props.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="friendList">
      <h2>Friends List</h2>
      <div>
        {props.friends.map((friend) => {
          return (
            <div className="friend" key={friend.id}>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends,
    isLoading: state.friendsReducer.isLoading,
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps, { getFriends })(FriendList);
