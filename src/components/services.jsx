import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "../design/body.css";
import Training from "../assets/ict-training.jpg";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div style={styles.services_ctr}>
          <div>
            <div style={styles.services_header}>Our Services</div>
            <div style={styles.services_desc}>
              Dreamscom, Our Quality Services Offered
            </div>
          </div>
        </div>

        <div>
          <div style={styles.services}>
            <div className="service_shadow" style={styles.service}>
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
              <div style={styles.service_name}>ICT Training</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                earum nulla aut impedit, architecto ea unde tenetur adipisci
                minus cumque praesentium ullam doloribus sequi ab in illo enim,
                quaerat animi?
              </div>
              <div
                className=""
                style={{
                  margin: "10px 0px 10px 0px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="service_shadow" style={styles.service}>
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
              <div style={styles.service_name}>ICT Training</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                earum nulla aut impedit, architecto ea unde tenetur adipisci
                minus cumque praesentium ullam doloribus sequi ab in illo enim,
                quaerat animi?
              </div>
              <div
                className=""
                style={{
                  margin: "10px 0px 10px 0px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="service_shadow" style={styles.service}>
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
              <div style={styles.service_name}>ICT Training</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                earum nulla aut impedit, architecto ea unde tenetur adipisci
                minus cumque praesentium ullam doloribus sequi ab in illo enim,
                quaerat animi?
              </div>
              <div
                className=""
                style={{
                  margin: "10px 0px 10px 0px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                >
                  Read More
                </Button>
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
  services_ctr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    width: "78vw",
  },
  services_header: { fontSize: 45, margin: "10px 0px", color: "#2d378e" },
  services_desc: { fontSize: 24, margin: "10px 0px" },
  services: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "50px 0px",
  },
  service: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    margin: "5px 20px",
  },
  service_icon: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  service_name: {
    fontSize: 30,
    fontWeight: 500,
    margin: "15px 0px",
    color: "#2d378e",
  },
};
