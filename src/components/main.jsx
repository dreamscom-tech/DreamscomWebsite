import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Banner from "../assets/ict-grid.png";
import Hospital from "../assets/hospital.jpg";
import Feedback from "../assets/feedback-4.png";
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
              <button className="services">Find Services</button>
            </div>
          </div>
          <div className="banner_img">
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
        <section className="why-us">
          <div className="why-us-hdr">Why Choose Us?</div>
          <div className="why-us-content">
            <ul className="why-us-li">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                officiis, recusandae dignissimos
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                officiis, recusandae dignissimos
              </li>
            </ul>
            <ul className="why-us-li">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                officiis, recusandae dignissimos
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                officiis, recusandae dignissimos
              </li>
            </ul>
          </div>
        </section>
        <section id="customer-quote">
          <div className="customer-quote-hdr">Customer Quote</div>
          <div className="customer-quote-ctr d-flex align-items-center justify-content-center">
            <img src={Feedback} alt="" height="200px" width="200px" />
            <div className="customer-quote">
              <div className="customer-quote-up">
                "My Organization runs smoothly with IT Services from Dreamscom.
                <br />
                We Got quick computer servicing.",
              </div>
              <div className="customer-quote-down py-3">
                <span>Mr. Joseph Kasonga</span> - ED Medical and Community
                Suppport Organization
              </div>
            </div>
          </div>
        </section>

        <section className="product-ctr">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                accusamus, ab soluta maxime libero laudantium itaque incidunt
                magni beatae? Maxime exercitationem illo illum quasi, ea sequi
                accusantium impedit et quis.
              </div>
              <div className="product-content-contact">
                <button className="services">Send An Email</button>
              </div>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                accusamus, ab soluta maxime libero laudantium itaque incidunt
                magni beatae? Maxime exercitationem illo illum quasi, ea sequi
                accusantium impedit et quis.
              </div>
              <div className="product-content-contact">
                <button className="services">Send An Email</button>
              </div>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                accusamus, ab soluta maxime libero laudantium itaque incidunt
                magni beatae? Maxime exercitationem illo illum quasi, ea sequi
                accusantium impedit et quis.
              </div>
              <div className="product-content-contact">
                <button className="services">Send An Email</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
