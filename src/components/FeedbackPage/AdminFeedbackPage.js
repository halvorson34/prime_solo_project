import React, { Component } from "react";
import { connect } from "react-redux";

class AdminFeedbackPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMINFEEDBACK",
    });
  }

  deleteFeedback = (id) => (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "DELETE_ADMINFEEDBACK",
      payload: {
        feedbackId: this.props.item.id,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>AdminFeedbackPage</h1>
        {this.props.store.adminFeedback.map((item, index) => (
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
