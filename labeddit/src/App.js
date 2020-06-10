import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import FeedPage from "./components/Pages/FeedPage";
import SignupPage from "./components/Pages/SignupPage";
import PostDetailsPage from "./components/Pages/PostDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/postdetails">
          <PostDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
