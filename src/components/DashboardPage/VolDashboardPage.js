import React, { Component } from "react";
import { connect } from "react-redux";
import Nav2 from "../Nav/Nav2";

import Container from "@material-ui/core/Container";

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
        <Nav2 />
        <Container maxWidth={false}>
          <h1>Dashboard</h1>
          {this.props.store.volunteer.map((item, index) => (
            <div key={index}>
              <h2 class="welcome"> Welcome {item.first_name}!</h2>
              <h3>What's new...</h3>
              <img src="../images/DogGroup.png" class="dogGroupImg" />

              {this.props.store.news.map((item, index) => (
                <div key={index}>
                  <ul>
                    <li>{item.message}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolDashboardPage);
