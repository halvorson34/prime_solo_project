import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  /*let loginLinkData = {
    path: "/home",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/admin";
    loginLinkData.text = "Home";
  }*/

  return (
    <div className="nav">
      {/*<Link to="/home">*/}
      <h2 className="nav-title">Big Hearts</h2>
      <img src="../images/BigHeart.png" class="image" />
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/home">
        Home
      </Link>
      {/*</Link>*/}
      {/*<div className="nav-right">*/}
      {/*<Link className="nav-link" to={loginLinkData.path}>*/}
      {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
      {/*{loginLinkData.text}*/}
      {/*</Link>*/}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
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
          <LogOutButton className="nav-link" />
        </div>
      )}
      {/* Always show this link since the about page is not protected */}
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
