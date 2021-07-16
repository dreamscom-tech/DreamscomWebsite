import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Home from "./pages/home";
import Services from "./pages/services";
import Contacts from "./pages/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/services" exact component={Services} />
              <Route path="/contacts" exact component={Contacts} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBlock: 20 }}>404</h1>
        <span style={{ marginBlock: 10 }}>
          This Page Was Not Found On The Server
        </span>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            style={{ marginBlock: 20 }}
          >
            <span style={{ fontSize: "17.5px", marginRight: "10px" }}>
              <span className="las la-home"></span>
            </span>
            Home
          </Button>
        </Link>
      </div>
    );
  }
}
