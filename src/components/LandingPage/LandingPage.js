import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import { Link } from "react-router-dom";

import "./LandingPage.css";

import Button from "@material-ui/core/Button";

class LandingPage extends Component {
  state = {
    heading: "WELCOME to BIG HEARTS!",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
        <div class="container">
          <img src="../images/BigHeart.png" class="bigHeartImg" />
          <div class="centered">"Every dog must have his day"</div>
        </div>
        <Button
          size="large"
          variant="contained"
          color="default"
          onClick={this.onLogin}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
