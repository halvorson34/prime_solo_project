import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LogOutButton from "../LogOutButton/LogOutButton";

import { Link } from "react-router-dom";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    heading: "WELCOME!",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <h3>???</h3>
          </div>
          <div className="grid-col grid-col_4">
            <button className="btn btn_sizeFull" onClick={this.onLogin}>
              Login / Register
            </button>
            <LogOutButton className="btn btn_sizeFull" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
