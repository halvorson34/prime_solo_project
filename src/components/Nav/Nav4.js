import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  return (
    <div className="nav">
      <h2 className="nav-title">BigHearts</h2>
      <img src="../images/BigHeart.png" alt="Heart" className="image" />
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <h2 className="nav-welcome">Welome to BigHearts!</h2>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
