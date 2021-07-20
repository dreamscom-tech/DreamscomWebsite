import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.jpg";
import "../design/header.css";
import Nav from "./Nav";
import "../design/nav.css";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <>
        <input
          type="checkbox"
          id="nav-toggle"
          defaultChecked={this.state.checked}
        />
        <Nav />
        <header className="header">
          <nav>
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="DREAMSCOM" className="logo_image" />
              </div>
            </Link>

            <div className="nav_links">
              <HashLink
                to="/#overview"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <span className="nav_link">Overview</span>
              </HashLink>
              <Link to="/services">
                <span className="nav_link">Services</span>
              </Link>
              <HashLink
                to="/#products"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <span className="nav_link">Products</span>
              </HashLink>
              <HashLink
                to="/#our-team"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <span className="nav_link">The Team</span>
              </HashLink>
              <Link to="/contacts">
                <span className="nav_link contact-us">
                  <span>Contact Us</span>
                </span>
              </Link>
            </div>
            <label
              htmlFor="nav-toggle"
              className="toggle-menu"
              onClick={() => {
                this.setState({ ...this.state, checked: !this.state.checked });
              }}
            >
              <i className="las la-bars"></i>
            </label>
          </nav>
        </header>
      </>
    );
  }
}

export default header;
