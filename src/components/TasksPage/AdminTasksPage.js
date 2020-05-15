import React, { Component } from "react";
import { connect } from "react-redux";

class AdminTasksPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_TASKS",
    });
  }

  state = {
    task: "",
    complete: false,
  };

  // input on change for Comments
  addTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  // onClick event for Comments, send input data to feedback reducer and post to feedback table in prime_app database
  saveTask = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_TASKS",
      payload: this.state,
    });
    this.setState({
      task: "",
    });
  };

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
        <h3>Add Task</h3>
        <input onChange={this.addTask} type="text" value={this.state.task} />
        <button onClick={this.saveTask}>ADD</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminTasksPage);
