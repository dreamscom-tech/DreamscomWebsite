import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "../design/services.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="content_container">
          <div>
            <div className="content_header">Connect With Us</div>
          </div>
          <div className="contents">
            <div className="contact">
              <form>
                <div>
                  <TextField
                    name="name"
                    variant="outlined"
                    label="Your Name"
                    style={{
                      width: "75%",
                      margin: "20px",
                    }}
                  />
                  <TextField
                    name="email"
                    variant="outlined"
                    label="Your Email"
                    style={{
                      width: "75%",
                      margin: "20px",
                    }}
                  />
                  <TextField
                    name="subject"
                    variant="outlined"
                    label="Subject"
                    style={{
                      width: "75%",
                      margin: "20px",
                    }}
                  />
                  <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    style={{
                      width: "75%",
                      margin: "20px",
                    }}
                  />
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "10px 0px 10px 10px",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="contact">
              <div className="headings">
                <h2>Address</h2>
              </div>
              <div className="descriptions">
                P.O Box 130, Lira Uganda Plot 43,
                <br /> NSSF Building, Obote Avenue
              </div>
              <div className="headings">
                <h2>Contact Details</h2>
              </div>
              <div className="descriptions">
                +256 772280228 / +256 788328170 <br />
                dreamscomtechnologies@gmail.com
              </div>
              <div className="headings">
                <h2>Business Hours</h2>
              </div>
              <div className="descriptions">
                Monday-Friday: 8:00am to 5:30pm <br />
                Saturday: 8:00am to 1:30pm
                <br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
