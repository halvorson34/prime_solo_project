import React, { Component } from "react";
import { connect } from "react-redux";
import Nav3 from "../Nav/Nav3";

import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

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

  deleteTask = (id, event) => {
    this.props.dispatch({
      type: "DELETE_TASKS",
      payload: `/api/tasks/${id}`,
    });
  };

  render() {
    return (
      <div>
        <Nav3 />
        <Container maxWidth={false}>
          <h1>Tasks</h1>
          <h2 class="taskHeading">Current task list...</h2>
          <img src="./images/DogBath.png" class="taskImg" />
          {this.props.store.tasks.map((item, index) => (
            <div key={index} class="tasks">
              <ul>
                <li>
                  {item.task}
                  <IconButton
                    aria-label="delete"
                    onClick={(event) => this.deleteTask(item.id, event)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </li>
              </ul>
            </div>
          ))}
          <h2 class="taskHeading">Add new task...</h2>
          <input onChange={this.addTask} type="text" value={this.state.task} />
          <button class="button" onClick={this.saveTask}>
            <span>Add </span>
          </button>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminTasksPage);
