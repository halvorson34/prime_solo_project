import React, { Component } from "react";
import { connect } from "react-redux";

class AdminFeedbackPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMINFEEDBACK",
    });
  }

  render() {
    return (
      <div>
        <h1>AdminFeedbackPage</h1>
        {this.props.store.adminFeedback.map((item, index) => (
          <div key={index}>
            {item.comments}
            {item.issues}
            {item.thank_yous}
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminFeedbackPage);
