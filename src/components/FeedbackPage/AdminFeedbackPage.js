import React, { Component } from "react";
import { connect } from "react-redux";

class AdminFeedbackPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_FEEDBACK",
    });
  }

  deleteFeedback = (event) => {
    this.props.dispatch({
      type: "DELETE_FEEDBACK",
      payload: `/api/feedback/${this.props.store.feedback.map}`,
    });
  };

  render() {
    return (
      <div>
        <h1>AdminFeedbackPage</h1>
        {this.props.store.feedback.map((item, index) => (
          <div key={index}>
            <ul>
              <li>
                {item.comments}
                {/*{item.issues} */}
                {/*{item.thank_yous}*/}
                <button onClick={this.deleteFeedback}>Delete</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminFeedbackPage);
