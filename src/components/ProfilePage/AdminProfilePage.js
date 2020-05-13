import React, { Component } from "react";
import { connect } from "react-redux";

class AdminProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMINPROFILE",
    });
  }

  render() {
    return (
      <div>
        <h1>Admin Profile Page</h1>
        {this.props.store.adminProfile.map((item, index) => (
          <div key={index}>
            <ul>
              <li>First Name: {item.first_name}</li>
              <li>Last Name: {item.last_name}</li>
              <li>Username: {item.username}</li>
              <li>Member Since:</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminProfilePage);
