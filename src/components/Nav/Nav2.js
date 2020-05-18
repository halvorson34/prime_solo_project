import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  return (
    <div className="nav">
      <h2 className="nav-title">Big Hearts</h2>
      <img src="../images/BigHeart.png" alt="Heart" className="image" />
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <div className="nav-middle">
        <Link className="nav-link" to="/volfeedback">
          Feedback
        </Link>
        <Link className="nav-link" to="/voldoggos">
          Doggo's
        </Link>
        <Link className="nav-link" to="/voltasks">
          Tasks
        </Link>
        <Link className="nav-link" to="/volprofile">
          Profile
        </Link>
        <Link className="nav-link" to="/voldashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
