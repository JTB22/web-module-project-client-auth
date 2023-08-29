import React from "react";
import "./Header.css";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h2>
        <Link to="/">FRIENDS DATABASE</Link>
      </h2>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendList">FriendList</Link>
        </li>
        <li>
          <Link to="/addFriend">AddFriend</Link>
        </li>
        <li>
          <Link to="/logout">LogOut</Link>
        </li>
      </ul>
    </div>
  );
}
