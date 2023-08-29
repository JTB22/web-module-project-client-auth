import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function AddFriend() {
  return (
    <div className="addFriend">
      <h2>Add Friend</h2>
      <form>
        <div className="formContainer">
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="age">Age</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
          <button type="submit">Add Friend</button>
        </div>
      </form>
    </div>
  );
}
