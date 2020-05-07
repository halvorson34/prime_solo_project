import React, { Component } from "react";
import { connect } from "react-redux";

class VolTasksPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_TASKS",
    });
  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        {this.props.store.tasks.map((item, index) => (
          <div key={index}>
            <input type="radio"></input>
            {item.task}
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(VolTasksPage);
