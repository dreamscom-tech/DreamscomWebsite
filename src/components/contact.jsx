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
                <label>Message</label>
                <textarea rows="5" placeholder="Your Message"></textarea>
                <button type="submit">SEND</button>
              </form>
            </div>
            <div className="contact-right">
              <h3>Reach Us</h3>
              <table>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
