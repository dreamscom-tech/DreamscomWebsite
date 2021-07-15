import React, { Component } from "react";
import Header from "./components/header";
import "./app.css";
// import Main from "./components/main";
import Services from "./components/services";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        {/* <Main /> */}
        <Services />
      </>
    );
  }
}

export default App;
