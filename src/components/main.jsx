import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Banner from "../assets/ict-grid.png";
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
            <h1>Connecting You to the ICT Grid</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim ipsa dolores ea nesciunt iste perspiciatis velit voluptatibus
              quae, magnam voluptates consequatur ipsum ipsam odio totam dicta
              rerum laboriosam ducimus!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              enim ipsa dolores ea nesciunt iste perspiciatis velit voluptatibus
              quae, magnam voluptates consequatur ipsum ipsam odio totam dicta
              rerum laboriosam ducimus!
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
            <div>Vision</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              repellat fugit esse veritatis explicabo odit quibusdam earum,
              unde, architecto accusantium provident, et suscipit. Quisquam est
              illo debitis alias, deleniti labore.
            </p>
          </div>
          <div className="mission vision-mission-values">
            <i className="las la-level-up-alt"></i>
            <div>Mission</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              repellat fugit esse veritatis explicabo odit quibusdam earum,
              unde, architecto accusantium provident, et suscipit. Quisquam est
              illo debitis alias, deleniti labore.
            </p>
          </div>
          <div className="core-values vision-mission-values">
            <i className="las la-glass-martini"></i>
            <div>Core Values</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              repellat fugit esse veritatis explicabo odit quibusdam earum,
              unde, architecto accusantium provident, et suscipit. Quisquam est
              illo debitis alias, deleniti labore.
            </p>
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
              <div className="product-content-hdr">HospitalPlus</div>
              <div className="product-content-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                accusamus, ab soluta maxime libero laudantium itaque incidunt
                magni beatae? Maxime exercitationem illo illum quasi, ea sequi
                accusantium impedit et quis.
              </div>
              <div className="product-content-contact">
                <button className="services">Find Services</button>
              </div>
            </div>
            <div className="product-content">
              <img src={Banner} alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
