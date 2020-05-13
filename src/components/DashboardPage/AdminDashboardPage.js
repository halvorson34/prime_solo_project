import React, { Component } from "react";
import { connect } from "react-redux";

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMINPROFILE",
    });
    this.props.dispatch({
      type: "GET_ADMINDASHBOARD",
    });
  }

  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        {this.props.store.adminProfile.map((item, index) => (
          <div key={index}>
            <h3> Welcome {item.first_name}!</h3>
            {this.props.store.adminDashboard.map((item, index) => (
              <div key={index}>
                <h3>What's new...</h3>
                <ul>
                  <li>{item.message}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminDashboardPage);
