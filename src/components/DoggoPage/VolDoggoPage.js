import React, { Component } from "react";
import { connect } from "react-redux";

class VolDoggoPage extends Component {
  render() {
    return (
      <div>
        <h1>VolDoggoPage</h1>
      </div>
    );
  }
}

export default connect()(VolDoggoPage);
