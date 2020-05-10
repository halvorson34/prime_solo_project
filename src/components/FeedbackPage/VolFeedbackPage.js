import React, { Component } from "react";
import { connect } from "react-redux";

class VolFeedbackPage extends Component {
  state = {
    comments: "",
  };

  addComments = (event) => {
    console.log("POST");
    this.setState({
      comments: event.target.value,
    });
  };

  saveComments = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_FEEDBACK",
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
        <h1>VolFeedbackPage</h1>
        <form>
          <input onChange={this.addComments} type="text" />
          <button onClick={this.saveComments}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolFeedbackPage);
