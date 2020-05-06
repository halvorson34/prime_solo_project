import React, { Component } from "react";
import { connect } from "react-redux";

class AdminFeedbackPage extends Component {
  render() {
    return (
      <div>
        <h1>AdminFeedbackPage</h1>
      </div>
    );
  }
}

export default connect()(AdminFeedbackPage);
