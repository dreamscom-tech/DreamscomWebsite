import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Banner from "../assets/ict-grid.png";

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
              <Button>Services</Button>
            </div>
          </div>
          <div className="banner_img">
            <img src={Banner} alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
