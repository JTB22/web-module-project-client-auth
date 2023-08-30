import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import App from "./App";
import Header from "./components/Header";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const root = createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const WebError = () => {
  return <h1>404 Not Found</h1>;
};

root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/friendList" element={<FriendList />} />
        <Route path="/addFriend" element={<AddFriend />} />
        <Route path="*" element={<WebError />} />
      </Routes>
    </Router>
  </Provider>
);
