import React, { Component } from "react";
import { connect } from "react-redux";

class AdminTasksPage extends Component {
  render() {
    return (
      <div>
        <h1>AdminTasksPage</h1>
      </div>
    );
  }
}

export default connect()(AdminTasksPage);
