import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";
import GitHubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
