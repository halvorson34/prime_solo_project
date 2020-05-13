import React, { Component } from "react";
import { connect } from "react-redux";

class AdminDashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    );
  }
}

export default connect()(AdminDashboardPage);
