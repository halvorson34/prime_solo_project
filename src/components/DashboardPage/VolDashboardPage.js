import React, { Component } from "react";
import { connect } from "react-redux";

class VolDashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_VOLUNTEER",
    });
    this.props.dispatch({
      type: "GET_NEWS",
    });
  }

  render() {
    return (
      <div>
        <h1>Volunteer Dashboard</h1>
        {this.props.store.volunteer.map((item, index) => (
          <div key={index}>
            <h3> Welcome {item.first_name}!</h3>
            <h3>What's new...</h3>
            {this.props.store.news.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>{item.message}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolDashboardPage);
