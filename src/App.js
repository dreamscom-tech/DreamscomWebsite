import React, { Component } from "react";
import Header from "./components/header";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
