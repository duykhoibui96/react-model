import React, { Component } from "react";
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
        {
          this.state.viewMode === SIGN_IN ? <SignIn switch={() => this.setState({ viewMode: MAIN })} /> : <Layout switch={() => this.setState({ viewMode: MAIN })} />
        }
      </div>
    );
  }
}

export default App;
