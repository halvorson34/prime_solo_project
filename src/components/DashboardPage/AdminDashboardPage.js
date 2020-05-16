import React, { Component } from "react";
import { connect } from "react-redux";

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
        <h1>Admin Dashboard</h1>
        {this.props.store.admin.map((item, index) => (
          <div key={index}>
            <h3> Welcome {item.first_name}!</h3>
          </div>
        ))}
        <h3>What's New...</h3>
        {this.props.store.news.map((item, index) => (
          <div key={index}>
            <ul>
              <li>
                {item.message}{" "}
                <button onClick={(event) => this.deleteNews(item.id, event)}>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
        <h3>New Message to Volunteers</h3>
        <input onChange={this.addNews} type="text" value={this.state.message} />
        <button onClick={this.saveNews}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminDashboardPage);
