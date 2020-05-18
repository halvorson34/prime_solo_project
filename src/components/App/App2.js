import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";
//import Nav2 from "../Nav/Nav2";

import LandingPage from "../LandingPage/LandingPage";
import "./App.css";
import VolFeedbackPage from "../FeedbackPage/VolFeedbackPage";
import VolDoggoPage from "../DoggoPage/VolDoggoPage";
import VolTasksPage from "../TasksPage/VolTasksPage";
import VolProfilePage from "../ProfilePage/VolProfilePage";

import VolDashboardPage from "../DashboardPage/VolDashboardPage";
import AdminDashboardPage from "../DashboardPage/AdminDashboardPage";
import AdminProfilePage from "../ProfilePage/AdminProfilePage";
import AdminFeedbackPage from "../FeedbackPage/AdminFeedbackPage";
import AdminDoggoPage from "../DoggoPage/AdminDoggoPage";
import AdminTasksPage from "../TasksPage/AdminTasksPage";

class App2 extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          {/*<Nav2 />*/}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/volprofile" component={VolProfilePage} />
          <Route exact path="/volfeedback" component={VolFeedbackPage} />
          <Route exact path="/voldoggos" component={VolDoggoPage} />
          <Route exact path="/voltasks" component={VolTasksPage} />
          <Route exact path="/voldashboard" component={VolDashboardPage} />
          <Route exact path="/admindashboard" component={AdminDashboardPage} />
          <Route exact path="/adminprofile" component={AdminProfilePage} />
          <Route exact path="/adminfeedback" component={AdminFeedbackPage} />
          <Route exact path="/admindoggos" component={AdminDoggoPage} />
          <Route exact path="/admintasks" component={AdminTasksPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App2);
