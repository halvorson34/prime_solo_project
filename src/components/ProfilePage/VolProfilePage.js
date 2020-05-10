import React, { Component } from "react";
import { connect } from "react-redux";

class VolProfilePage extends Component {
  //componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Volunteer Profile Page</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(VolProfilePage);
