import React, { Component } from "react";
import { connect } from "react-redux";

class AdminDoggoPage extends Component {
  render() {
    return (
      <div>
        <h1>AdminDoggoPage</h1>
      </div>
    );
  }
}

export default connect()(AdminDoggoPage);
