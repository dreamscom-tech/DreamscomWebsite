import React, { Component } from "react";
import "../design/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="footer-ctr">
          <div className="footer-content">
            <div className="">Dreamscom Technologies LTD</div>
            <div className="">
              Plot 43 Obote Avenue NSSF Building
              <br />
              <br />
              P.O Box 130, Lira Uganda
            </div>
          </div>
          <div className="footer-content">
            <div className="">Products &amp; Services</div>
            <div className="">
              <ul>
                <li>SchoolSoft</li>
                <li>PharmacySoft</li>
                <li>Hospital Manager</li>
                <li>Inventory Manager</li>
                <li>SaccoSoft</li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <div className="">Dreamscom Technologies LTD</div>
            <div className="">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Clients and Partners</li>
                <li>News and Events</li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <div className="">Follow Us</div>
            <div className="">
              <span>
                <i className="lab la-facebook-f la-lw"></i>
              </span>
              <span>
                <i className="lab la-twitter la-lw"></i>
              </span>
              <span>
                <i className="lab la-whatsapp la-lw"></i>
              </span>
              <span>
                <i className="lab la-linkedin la-lw"></i>
              </span>
              <span>
                <i className="lab la-youtube la-lw"></i>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
