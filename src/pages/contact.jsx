import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Contacts from "../components/contact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Contacts />
        <Footer />
      </>
    );
  }
}

export default Contact;
