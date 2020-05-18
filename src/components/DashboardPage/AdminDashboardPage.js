import React, { Component } from "react";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";

class AdminDashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMIN",
    });
    this.props.dispatch({
      type: "GET_NEWS",
    });
  }

  state = {
    message: "",
  };

  // input on change for Message
  addNews = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  // onClick event for Message, send input data to Admin Dashboard reducer and post to news table in prime_app database
  saveNews = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_NEWS",
      payload: this.state,
    });
    this.setState({
      message: "",
    });
  };

  deleteNews = (id, event) => {
    this.props.dispatch({
      type: "DELETE_NEWS",
      payload: `/api/news/${id}`,
    });
  };

  render() {
    return (
      <div>
        <Container maxWidth={false}>
          <h1>Dashboard</h1>
          {this.props.store.admin.map((item, index) => (
            <div key={index} class="welcome">
              <h2 class="welcome"> Welcome {item.first_name}!</h2>
            </div>
          ))}
          <h3>What's New...</h3>
          <img src="../images/DogGroup.png" class="dogGroupImg" />
          {this.props.store.news.map((item, index) => (
            <div key={index}>
              <ul>
                <li>
                  {item.message}{" "}
                  <button
                    class="button"
                    onClick={(event) => this.deleteNews(item.id, event)}
                  >
                    <span>Delete</span>
                  </button>
                </li>
              </ul>
            </div>
          ))}
          <h3>Send a Message to Volunteers!</h3>
          <textarea
            rows="25"
            cols="50"
            onChange={this.addNews}
            type="text"
            value={this.state.message}
            placeholder="Send out news and updates here!"
          ></textarea>
          <br />
          <button class="button" onClick={this.saveNews}>
            <span>Submit </span>
          </button>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminDashboardPage);
