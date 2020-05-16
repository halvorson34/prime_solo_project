import React, { Component } from "react";
import { connect } from "react-redux";
//import DropzoneS3Uploader from "react-dropzone-s3-uploader";
//import ImageUpload from "../ImageUpload/ImageUpload";

class AdminDoggoPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_DOGGOS",
    });
  }

  state = {
    name: "",
    breed: "",
    age: "",
    arrived: "",
    notes: "",
    walked: false,
    played: false,
    favorite: false,
    picture: "",
  };

  // input on change for Comments
  addDoggoName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // input on change for Comments
  addDoggoBreed = (event) => {
    this.setState({
      breed: event.target.value,
    });
  };

  // input on change for Comments
  addDoggoAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  // input on change for Comments
  addDoggoArrived = (event) => {
    this.setState({
      arrived: event.target.value,
    });
  };

  // input on change for Comments
  addDoggoNotes = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  // onClick event for Comments, send input data to feedback reducer and post to feedback table in prime_app database
  saveDoggo = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SAVE_DOGGOS",
      payload: this.state,
    });
    this.setState({
      name: "",
      breed: "",
      age: "",
      arrived: "",
      notes: "",
    });
  };

  deleteDoggo = (id, event) => {
    this.props.dispatch({
      type: "DELETE_DOGGOS",
      payload: `/api/doggos/${id}`,
    });
  };

  render() {
    return (
      <div>
        <h1>Doggo's</h1>
        Name:{" "}
        <input
          onChange={this.addDoggoName}
          type="text"
          value={this.state.name}
        />
        Breed:{" "}
        <input
          onChange={this.addDoggoBreed}
          type="text"
          value={this.state.breed}
        />
        Age:{" "}
        <input onChange={this.addDoggoAge} type="text" value={this.state.age} />
        Arrived:{" "}
        <input
          onChange={this.addDoggoArrived}
          type="text"
          value={this.state.arrived}
        />
        Notes:{" "}
        <input
          onChange={this.addDoggoNotes}
          type="text"
          value={this.state.notes}
        />
        <button onClick={this.saveDoggo}>Submit</button>
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
            <button onClick={(event) => this.deleteDoggo(item.id, event)}>
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminDoggoPage);
