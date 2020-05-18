import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav4 from "../Nav/Nav4";

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
          <div className="container">
            <img
              src="../images/BigHeart.png"
              alt="Heart"
              className="bigHeartImg"
            />
            <div className="centered">"Every dog must have his day"</div>
          </div>
          <Button
            size="large"
            variant="contained"
            color="default"
            onClick={this.onAdmin}
          >
            Admin
          </Button>{" "}
          <Button
            size="large"
            variant="contained"
            color="default"
            onClick={this.onVol}
          >
            Volunteer
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
