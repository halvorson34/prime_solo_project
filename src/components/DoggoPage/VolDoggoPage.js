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
        <h1>Doggo's</h1>
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
            <input type="radio" id="walked"></input>
            <label for="walked">Walked</label>
            <br />
            <input type="radio" id="Played"></input>
            <label for="Played">Played</label>
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(VolDoggoPage);
