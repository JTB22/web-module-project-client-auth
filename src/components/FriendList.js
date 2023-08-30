import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/FriendsActions";
import { useNavigate } from "react-router-dom";

const FriendList = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    props.getFriends();
  }, []);

  return (
    <div className="friendList">
      <h2>Friends List</h2>
      <div>
        {props.isLoading && <h2>Loading...</h2>}
        {props.friends &&
          props.friends.map((friend) => {
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
