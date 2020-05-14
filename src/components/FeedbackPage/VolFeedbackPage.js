import React, { Component } from "react";
import { connect } from "react-redux";

class VolFeedbackPage extends Component {
  state = {
    comments: "",
    issues: "",
    thank_yous: "",
  };

  // input on change for Comments
  addComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  // onClick event for Comments, send input data to feedback reducer and post to feedback table in prime_app database
  saveComments = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_FEEDBACK",
      payload: this.state,
    });
    this.setState({
      comments: "",
    });
  };

  // input on change for Issues
  addIssues = (event) => {
    this.setState({
      issues: event.target.value,
    });
  };

  // onClick event for Issues, send input data to feedback reducer and post to feedback table in prime_app database
  saveIssues = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_FEEDBACK",
      payload: this.state,
    });
    this.setState({
      issues: "",
    });
  };

  // input on change for Thank Yous
  addThankYous = (event) => {
    this.setState({
      thank_yous: event.target.value,
    });
  };

  // onClick event for Thank Yous, send input data to feedback reducer and post to feedback table in prime_app database
  saveThankYous = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_FEEDBACK",
      payload: this.state,
    });
    this.setState({
      thank_yous: "",
    });
  };

  render() {
    return (
      <div>
        <h1>VolFeedbackPage</h1>
        <form>
          <input
            onChange={this.addComments}
            type="text"
            value={this.state.comments}
          />
          <button onClick={this.saveComments}>Submit</button>
          <input
            onChange={this.addIssues}
            type="text"
            value={this.state.issues}
          />
          <button onClick={this.saveIssues}>Submit</button>
          <input
            onChange={this.addThankYous}
            type="text"
            value={this.state.thank_yous}
          />
          <button onClick={this.saveThankYous}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolFeedbackPage);
