import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Logo from "../assets/logo.jpg";
import "../design/header.css";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header className="header">
          <nav>
            <div className="logo">
              <img src={Logo} alt="DREAMSCOM" className="logo_image" />
            </div>
            <div className="nav_links">
              <span className="nav_link">Overview</span>
              <span className="nav_link">Services</span>
              <span className="nav_link">Products</span>
              <span className="nav_link">The Team</span>
              <span className="nav_link contact-us">
                <span>Contact Us</span>
              </span>
              {/* <Button
                variant="contained"
                style={{ backgroundColor: "#2f5be7", color: "white" }}
              >
                Contact Us
              </Button> */}
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default header;
