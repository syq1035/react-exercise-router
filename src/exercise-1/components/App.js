import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import MyProfile from "./MyProfile";
import Header from "./Header";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/myProfile" component={MyProfile} />
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
