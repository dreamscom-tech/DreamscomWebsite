import React, { Component } from "react";
import Header from "./components/header";
import "./app.css";
// import Main from "./components/main";
// import Services from "./components/services";
import Contact from "./components/contact";

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
        <Contact />
      </>
    );
  }
}

export default App;
