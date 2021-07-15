import React, { Component } from "react";
import Header from "./components/header";
import "./app.css";
<<<<<<< HEAD
// import Main from "./components/main";
import Services from "./components/services";
=======
import Main from "./components/main";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
>>>>>>> e6d1606425f2a972684773a1da659a5e9f8a9740

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
