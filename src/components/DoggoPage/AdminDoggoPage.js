import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Nav3 from "../Nav/Nav3";

import "./DoggoPage.css";

//import DropzoneS3Uploader from "react-dropzone-s3-uploader";
//import ImageUpload from "../ImageUpload/ImageUpload";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { withStyles, createStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const customStyles = (theme) =>
  createStyles({
    imgMedia: {
      height: "250px",
      width: "250px",
    },
    card: {
      maxWidth: "250px",
      boxShadow: "10px 8px 40px -12px rgba(0,0,0,1)",
    },
  });

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
    const { classes } = this.props;

    return (
      <div>
        <Nav3 />
        <Container maxWidth={false}>
          <h1>Enter New Doggo's:</h1>
          <form>
            <label for="name">Name:</label>
            <input
              placeholder="Name"
              id="name"
              onChange={this.addDoggoBreed}
            ></input>
            <label for="breed">Breed:</label>
            <input
              placeholder="Breed"
              id="breed"
              onChange={this.addDoggoBreed}
            ></input>
            <label for="age">Age:</label>
            <input
              placeholder="Years/Months"
              id="age"
              onChange={this.addDoggoAge}
            ></input>
            <label for="arrived">Arrived:</label>
            <input
              id="arrived"
              placeholder="dd/mm/yyyy"
              onChange={this.addDoggoArrived}
            ></input>
            <label for="notes">Notes:</label>
            <input
              placeholder="Notes"
              id="notes"
              onChange={this.addDoggoNotes}
            ></input>
            <button class="button" onClick={this.saveDoggo}>
              <span>Submit </span>
            </button>
          </form>
          <h1>Current Doggo's:</h1>
          <div class="cards">
            <Grid container spacing={5}>
              {this.props.store.doggos.map((item, index) => (
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <div key={index}>
                      <CardMedia
                        className={classes.imgMedia}
                        image={item.picture}
                        title={item.name}
                      />
                      <br />
                      <CardContent>
                        Name: {item.name}
                        <br />
                        Breed: {item.breed}
                        <br />
                        Age: {item.age}
                        <br />
                        Arrived: {item.arrived}
                        <br />
                        Notes: {item.notes}
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={(event) => this.deleteDoggo(item.id, event)}
                          variant="contained"
                          size="small"
                          color="default"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(AdminDoggoPage))
);
