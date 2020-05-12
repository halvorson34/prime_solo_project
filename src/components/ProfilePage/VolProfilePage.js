import React, { Component } from "react";
import { connect } from "react-redux";

class VolProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_VOLPROFILE",
    });
  }

  render() {
    return (
      <div>
        <h1>Volunteer Profile Page</h1>
        {this.props.store.volProfile.map((item, index) => (
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

export default connect(mapStoreToProps)(VolProfilePage);
