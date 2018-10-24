import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import Layout from "./pages/Layout";

const SIGN_IN = 1
const MAIN = 2

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: SIGN_IN
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Redirect from="/" to="/home" />
            <Route path="/login" component={SignIn} />
            <Route path="/home" component={Layout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
