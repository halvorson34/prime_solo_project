import React, { Component } from "react";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";

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

  // input on change for Issues
  addIssues = (event) => {
    this.setState({
      issues: event.target.value,
    });
  };

  // input on change for Thank Yous
  addThankYous = (event) => {
    this.setState({
      thank_yous: event.target.value,
    });
  };

  saveFeedback = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_FEEDBACK",
      payload: this.state,
    });
    this.setState({
      comments: "",
      issues: "",
      thank_yous: "",
    });
  };

  render() {
    return (
      <div>
        <Container maxWidth={false}>
          <h1>Feedback</h1>
          <form>
            <label for="comments">Comments:</label>
            <input
              id="comments"
              onChange={this.addComments}
              type="text"
              value={this.state.comments}
            />
            <label for="issues">Issues:</label>
            <input
              id="issues"
              onChange={this.addIssues}
              type="text"
              value={this.state.issues}
            />
            <label for="thankyous">Thank Yous:</label>
            <input
              id="thankyous"
              onChange={this.addThankYous}
              type="text"
              value={this.state.thank_yous}
            />
            <br />
            <button class="button" onClick={this.saveFeedback}>
              <span>Submit </span>
            </button>
            <br />
            <img src="../images/DogBones.png" class="dogBonesImg" />
          </form>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolFeedbackPage);
