import React, { Component } from "react";
import { connect } from "react-redux";

class VolFeedbackPage extends Component {
  render() {
    return (
      <div>
        <h1>VolFeedbackPage</h1>
      </div>
    );
  }
}

export default connect()(VolFeedbackPage);
