import React, { Component } from "react";
import { Link } from "react-router-dom";

//images
import Banner from "../assets/ict-grid.png";
import Hospital from "../assets/hospital.jpg";
import Feedback from "../assets/feedback-4.png";
import School from "../assets/school.png";
import Elearning from "../assets/elearning.png";
//images - our team
import Smash_Sam from "../assets/Smash-sam.jpg";
import Smash_Sifudu from "../assets/Smash-sifudu.jpg";
import Smash_Walter from "../assets/Smash-Walter-Okello.jpg";
import Smash_Mulindwa from "../assets/Smash-mulindwa.jpg";
import Smash_placeholder from "../assets/place-holder.jpg";

import "../design/body.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <section className="banner">
          <div className="banner_text">
            <div className="banner-text-hdr">
              Connecting You to the ICT Grid
            </div>
            <p>
              We Aimed at offering quality,affordable and reliable IT Services
              to Your organization
            </p>
            <div className="">
              <Link to="/services">
                <button className="services">Find Services</button>
              </Link>
            </div>
          </div>
          <div className="banner_img">
            {/* <div className="stack-card">
              
            </div> */}
            <img src={Banner} alt="" />
          </div>
        </section>
        <section className="vision-mission-values-ctr">
          <div className="vision vision-mission-values">
            <i className="las la-low-vision"></i>
            <div className="vision-mission-values-hdr">Vision</div>
            <p>
              To be a Leading and Preffered Provider of IT Services in Uganda
              And East Africa
            </p>
          </div>
          <div className="mission vision-mission-values">
            <i className="las la-level-up-alt"></i>
            <div className="vision-mission-values-hdr">Mission</div>
            <p>
              We strive to empower businesses and oranizations with sustainable
              and affordable IT solutions that foster porductivity, maximize
              efficiency while reducing operating costs
            </p>
          </div>
          <div className="core-values vision-mission-values">
            <i className="las la-glass-martini"></i>
            <div className="vision-mission-values-hdr">Core Values</div>
            <ul className="">
              <li>Innovation</li>
              <li>Team Work</li>
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Commitment to Clients</li>
            </ul>
          </div>
        </section>
        <section className="why-us" id="overview">
          <div className="why-us-hdr">Why Choose Us?</div>
          <div className="why-us-content">
            <ul className="why-us-li">
              <li>
                <b>Quality of delivery: </b> It is the policy of Dreamscom
                Technologies Ltd to supply and maintain a quality of goods and
                services which are fully compliant with national and
                International Standards at all times.
              </li>
              <li>
                <b>Customer focus:</b> Customer focus and continuous investment
                in our personnel, processes and technology are at the forefront
                of our business planning, enabling reliability and confidence in
                the results we provide.
              </li>
            </ul>
            <ul className="why-us-li">
              <li>
                <b>Affordable Products &amp; Services:</b> Our Services are very
                Affordable and of quality
              </li>
              <li>
                <b>Committed Team:</b> With our committed team, We offer great
                service Delivery to our customers.
              </li>
            </ul>
          </div>
        </section>
        <section className="customer-quote">
          <div className="customer-quote-hdr">Customer Quote</div>
          <div className="customer-quote-ctr">
            <img src={Feedback} alt="" height="200px" width="200px" />
            <div className="customer-quote">
              <div className="customer-quote-up">
                "My Organization runs smoothly with IT Services from Dreamscom.
                <br />
                We Got quick computer servicing.",
              </div>
              <div className="customer-quote-down">
                <span>Mr. Joseph Kasonga</span> - ED Medical and Community
                Suppport Organization
              </div>
            </div>
          </div>
        </section>
        <section className="our-team" id="our-team">
          <div className="our-team-hdr">
            <div>Meet Our Team</div>
            <div>...that provides you with quality services</div>
          </div>
          <div className="out-team-ctr">
            <div className="our-team-card">
              <div className="">
                <img src={Smash_Walter} alt="" />
              </div>
              <div>
                <div className="our-team-name">Walter Okello</div>
                <div className="our-team-role">Managing Director</div>
                <div className="our-team-social">
                  <i className="lab la-linkedin"></i>
                  <i className="lab la-twitter"></i>
                  <i className="las la-envelope"></i>
                </div>
              </div>
            </div>
            <div className="our-team-card">
              <div className="">
                <img src={Smash_Sifudu} alt="" />
              </div>
              <div>
                <div className="our-team-name">Peter Sifudu</div>
                <div className="our-team-role">Director - Innovations</div>
                <div className="our-team-social">
                  <i className="lab la-linkedin"></i>
                  <i className="lab la-twitter"></i>
                  <i className="las la-envelope"></i>
                </div>
              </div>
            </div>
            <div className="our-team-card">
              <div className="">
                <img src={Smash_Sam} alt="" />
              </div>
              <div>
                <div className="our-team-name">Samuel Wekobosya</div>
                <div className="our-team-role">Software Developer</div>
                <div className="our-team-social">
                  <i className="lab la-linkedin"></i>
                  <i className="lab la-twitter"></i>
                  <i className="las la-envelope"></i>
                </div>
              </div>
            </div>
            <div className="our-team-card">
              <div className="">
                <img src={Smash_Mulindwa} alt="" />
              </div>
              <div>
                <div className="our-team-name">Mulindwa Denis</div>
                <div className="our-team-role">Software Developer</div>
                <div className="our-team-social">
                  <i className="lab la-linkedin"></i>
                  <i className="lab la-twitter"></i>
                  <i className="las la-envelope"></i>
                </div>
              </div>
            </div>
            <div className="our-team-card">
              <div className="">
                <img src={Smash_placeholder} alt="" />
              </div>
              <div>
                <div className="our-team-name">Ocen Tonny Walter</div>
                <div className="our-team-role"> Network Enginner</div>
                <div className="our-team-social">
                  <i className="lab la-linkedin"></i>
                  <i className="lab la-twitter"></i>
                  <i className="las la-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-ctr" id="products">
          <div className="product-hdr">
            <div className="product-hdr-main">
              SoftWare Products We are Proud To Present To You
            </div>
            <div className="product-hdr-caption">
              To Solve Your ICT Challenges
            </div>
          </div>
          <div className="product">
            <div className="product-content">
              <img src={Hospital} alt="" />
            </div>
            <div className="product-content product-content-hospitalplus">
              <div className="product-content-hdr">
                <span>HospitalPlus</span>
                <br />
                <span>
                  Enables you keep hospital Records, Easily &amp; Safely
                </span>
              </div>
              <div className="product-content-description">
                Hospital Plus is an information system that Keeps hospital
                Records, Improves communication flow between different
                departments of a hospital. The system also Enables you to create
                Reports after a given period of time.
              </div>
              <div className="product-content-contact">
                <Link to="/contacts">
                  <button className="services">Send An Inquiry</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-content product-content-hospitalplus">
              <div className="product-content-hdr">
                <span>Inventory Management System</span>
                <br />
                <span>
                  For sales, procurement, Stock management and notifications.
                </span>
              </div>
              <div className="product-content-description">
                This system can be used in Pharmacies, Hardwares, wholesale
                shops and any other business that carries out the purchasing and
                Sales of the commodities.
              </div>
              <div className="product-content-contact">
                <Link to="/contacts">
                  <button className="services">Send An Inquiry</button>
                </Link>
              </div>
            </div>
            <div className="product-content">
              <img src={School} alt="" />
            </div>
          </div>
          <div className="product">
            <div className="product-content">
              <img src={Elearning} alt="" />
            </div>
            <div className="product-content product-content-hospitalplus">
              <div className="product-content-hdr">
                <span>SchoolSoft</span>
                <br />
                <span>
                  Brings all the manual school tasks to the digital platform.
                </span>
              </div>
              <div className="product-content-description">
                It increases the efficiency and accuracy of all work and also
                helps to save time and resources for the school. So schoolsSoft
                is now a very basic requirement of every school. All tasks
                become smooth, communication becomes better and faster.
              </div>
              <div className="product-content-contact">
                <Link to="/contacts">
                  <button className="services">Send An Inquiry</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
