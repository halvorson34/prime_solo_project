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

  state = {
    message: "",
  };

  // input on change for Message
  addMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  // onClick event for Message, send input data to Admin Dashboard reducer and post to news table in prime_app database
  saveMessage = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_MESSAGE",
      payload: this.state,
    });
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        {this.props.store.adminProfile.map((item, index) => (
          <div key={index}>
            <h3> Welcome {item.first_name}!</h3>
            <h3>What's new...</h3>
            {/*{this.props.store.adminDashboard.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>{item.message}</li>
                </ul>
              </div>
            ))}*/}
          </div>
        ))}
        <h3>What's New...</h3>
        {this.props.store.adminDashboard.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.message}</li>
            </ul>
          </div>
        ))}
        <h3>New Message to Volunteers</h3>
        <input
          onChange={this.addMessage}
          type="text"
          value={this.state.message}
        />
        <button onClick={this.saveMessage}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminDashboardPage);
