import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav4 from "../Nav/Nav4";

import { Link } from "react-router-dom";

import "./LandingPage.css";

import Button from "@material-ui/core/Button";

class LandingPage extends Component {
  onAdmin = (event) => {
    this.props.history.push("/admindashboard");
  };

  onVol = (event) => {
    this.props.history.push("/voldashboard");
  };

  render() {
    return (
      <div>
        <Nav4 />

        <div className="container">
          <div class="container">
            <img src="../images/BigHeart.png" class="bigHeartImg" />
            <div class="centered">"Every dog must have his day"</div>
          </div>
          <Button
            size="large"
            variant="contained"
            color="default"
            onClick={this.onAdmin}
          >
            Admin
          </Button>
          <Button
            size="large"
            variant="contained"
            color="default"
            onClick={this.onVol}
          >
            Vol
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
