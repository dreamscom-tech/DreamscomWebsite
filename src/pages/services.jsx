import React, { Component } from "react";
import Header from "../components/header";
import Service from "../components/services";
import Footer from "../components/footer";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Service />
        <Footer />
      </>
    );
  }
}

export default Services;
