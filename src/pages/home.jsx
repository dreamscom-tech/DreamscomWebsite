import React, { Component } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Home;
