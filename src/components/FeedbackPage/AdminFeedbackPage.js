import React, { Component } from "react";
import { connect } from "react-redux";

class AdminFeedbackPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_FEEDBACK",
    });
  }

  deleteFeedback = (id, event) => {
    this.props.dispatch({
      type: "DELETE_FEEDBACK",
      payload: `/api/feedback/${id}`,
    });
  };

  render() {
    return (
      <div>
        <h1>Feedback</h1>
        {this.props.store.feedback.map((item, index) => (
          <div key={index}>
            <ul>
              <li>
                {item.comments}
                {/*{item.issues} */}
                {/*{item.thank_yous}*/}
                <button
                  onClick={(event) => this.deleteFeedback(item.id, event)}
                >
                  Delete
                </button>
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
