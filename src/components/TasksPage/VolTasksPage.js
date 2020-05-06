import React, { Component } from "react";
import { connect } from "react-redux";

class VolTasksPage extends Component {
  render() {
    return (
      <div>
        <h1>VolTasksPage</h1>
      </div>
    );
  }
}

export default connect()(VolTasksPage);
