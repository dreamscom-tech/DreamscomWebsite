import React, { Component } from "react";
import "../design/services.css";
import App from "../assets/mobile-app.jpeg";
import Consult from "../assets/ict-consult.jpg";
import Training from "../assets/ict-training.jpg";
import Repair from "../assets/Computer-Repair.png";
import Software from "../assets/Software-Development.jpg";
import Analysis from "../assets/data_analysis.jpg";
import Graphics from "../assets/graphics.jpg";
import Supply from "../assets/supply-of-computers.png";
import Network from "../assets/networking.png";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="content_container">
          <div>
            <div className="content_header">Our Services</div>
            <div style={styles.services_desc}>...Quality Services Offered</div>
          </div>

          <div>
            <div className="contents">
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Training}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>
                  ICT Training and Internships
                </div>
                <div className="description">
                  We Train Different Personnel in Areas around the field of ICT
                  &amp; Offer Student Internships to students of all levels of
                  their academic Journey
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Repair}
                    alt="Repair"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>
                  Computer Repair &amp; Maintenance
                </div>
                <div className="description">
                  We offer good and quality Computer &amp; Maintenance from a
                  Proffessionl Team at affordable costs.
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Software}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>Software Development</div>
                <div className="description">
                  We create software solutions to meet challenges at your
                  Organisations.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="contents">
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Analysis}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>Data Analysis</div>
                <div className="description">
                  We Analyse Data your Organisations' Data that you can draw
                  useful conclusions from.
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Graphics}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>Computer Graphics Designs</div>
                <div className="description">
                  We Design Graphics, Printing of Quality Output Graphics,
                  making IDs, Posters and other Graphics work
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={App}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>Mobile App. Development</div>
                <div className="description">
                  We develop and deploy Mobile Apps to create solutions to your
                  organisations' Challenges.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="contents">
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Supply}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>
                  Supply Of Computers &amp; Accessories
                </div>
                <div className="description">
                  We Supply Genuine Computer parts,Accessories and all Computer
                  related Hardware
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Network}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>Computer Networking</div>
                <div className="description">
                  We do Computer Networking for Organisations, both on large
                  &amp; Small scale, Internet Connections, LAN Connections and
                  others
                </div>
              </div>
              <div className="content">
                <div style={styles.service_icon}>
                  <img
                    src={Consult}
                    alt="Training"
                    style={{
                      borderRadius: 240,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={styles.service_name}>ICT Consultancy</div>
                <div className="description">
                  We have experts that offer ICT Consultancy, - Advice on
                  Projects' Designs, Structure and Efficiency of ICT Sytems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;

const styles = {
  services_desc: { fontSize: 15, margin: "10px 0px", fontStyle: "italic" },
  service_icon: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  service_name: {
    fontSize: 30,
    fontWeight: 500,
    margin: "15px 0px",
    color: "#2d378e",
  },
};
