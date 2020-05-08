import React, { Component } from "react";
import { connect } from "react-redux";

class VolDoggoPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_DOGGOS",
    });
  }

  render() {
    return (
      <div>
        <h1>VolDoggoPage</h1>
        {this.props.store.doggos.map((item, index) => (
          <div key={index} class="dogList">
            <img src={item.picture} alt={item.name} />
            <br />
            Name: {item.name}
            <br />
            Breed: {item.breed}
            <br />
            Age: {item.age}
            <br />
            Arrived: {item.arrived}
            <br />
            Notes: {item.notes}
            <br />
            <input type="radio"></input>
            {item.walked}
            <p>Walked</p>
            <br />
            <input type="radio"></input>
            {item.played}
            <p>Played</p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(VolDoggoPage);
