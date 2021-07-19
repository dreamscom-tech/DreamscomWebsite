import React, { Component } from "react";
import "../design/services.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="contact">
          <h1>Connect With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nihil blanditiis placeat similique itaque labore
          </p>
          <div className="contact-box">
            <div className="contact-left">
              <h3>Send Your Message</h3>
              <form>
                <div className="input-row">
                  <div className="input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Peter" />
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="abc@domain.com" />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Contact</label>
                    <input type="text" placeholder="0742 343122" />
                  </div>
                  <div className="input-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Request" />
                  </div>
                </div>
                <label></label>
                <textarea rows="5" placeholder="Your Message"></textarea>
                <button type="submit">SEND</button>
              </form>
            </div>
            <div className="contact-right">
              <h3>Reach Us</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>dreamscomtechnologies@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phonenumber</td>
                    <td>
                      +256 773 002475
                      <br />
                      +256 709857117
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      Plot 43 NSSF Building
                      <br />
                      Obote Avenue
                      <br />
                      Lira, Uganda
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="contents">

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
          </div> */}
      </div>
    );
  }
}

export default Contact;
