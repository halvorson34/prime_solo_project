import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  return (
    <div className="nav">
      <h2 className="nav-title">Big Hearts</h2>
      <img src="../images/BigHeart.png" alt="Heart" class="image" />
      <Link className="nav-link" to="/">
        Home
      </Link>
      <div className="nav-middle">
        <Link className="nav-link" to="/adminfeedback">
          Feedback
        </Link>
        <Link className="nav-link" to="/admindoggos">
          Doggo's
        </Link>
        <Link className="nav-link" to="/admintasks">
          Tasks
        </Link>
        <Link className="nav-link" to="/adminprofile">
          Profile
        </Link>
        <Link className="nav-link" to="/admindashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
