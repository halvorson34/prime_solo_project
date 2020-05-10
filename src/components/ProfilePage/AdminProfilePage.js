import React, { Component } from "react";
import { connect } from "react-redux";

class AdminProfilePage extends Component {
  //componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Admin Profile Page</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(AdminProfilePage);
