import React, { Component } from "react";
import { connect } from "react-redux";
import Nav2 from "../Nav/Nav2";

import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";

class VolTasksPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_TASKS",
    });
  }

  render() {
    return (
      <div>
        <Nav2 />
        <Container maxWidth={false}>
          <h1>Tasks</h1>

          <h2 class="taskHeading">A few things to get you started...</h2>
          <img src="./images/DogBath.png" class="taskImg" />

          {this.props.store.tasks.map((item, index) => (
            <div key={index} class="tasks">
              <Checkbox
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />{" "}
              {item.task}
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolTasksPage);
