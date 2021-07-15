import React, { Component } from "react";
import Header from "./components/header";
import "./app.css";
import Main from "./components/main";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
