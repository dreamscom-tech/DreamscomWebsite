import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="sideBar-ctr">
          <div className="sidebar">
            <label htmlFor="nav-toggle" className="close-on-sm">
              <span className="las la-times"></span>
            </label>
            <div className="sidebar-brand">
              <h2>
                <span
                  className="las la-desktop"
                  style={{ fontSize: "32px" }}
                ></span>
                <span>Dreamscom</span>
              </h2>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <HashLink
                    to="/#overview"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  >
                    <span className="_a_replaced">
                      <span className="las la-user-plus"></span>
                      <span>Overview</span>
                    </span>
                  </HashLink>
                </li>
                <li>
                  <Link to="/services">
                    <span className="_a_replaced">
                      <span className="las la-user-edit"></span>
                      <span>Services</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <HashLink
                    to="/#products"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    <span className="_a_replaced">
                      <span className="las la-user-edit"></span>
                      <span>Products</span>
                    </span>
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/#our-team"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    <span className="_a_replaced">
                      <span className="las la-user-edit"></span>
                      <span>The Team</span>
                    </span>
                  </HashLink>
                </li>
                <li>
                  <Link to="/contacts">
                    <span className="_a_replaced">
                      <span className="las la-user-edit"></span>
                      <span>Contact Us</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
