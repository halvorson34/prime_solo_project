import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Nav2 from "../Nav/Nav2";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

import { withStyles, createStyles } from "@material-ui/core/styles";

import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";

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

class VolDoggoPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_DOGGOS",
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Nav2 />
        <Container maxWidth={false}>
          <h1>Doggo's</h1>
          <div className="cards">
            <Grid container spacing={5}>
              {this.props.store.doggos.map((item, index) => (
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <div key={index} className="dogList">
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
                        <Checkbox
                          inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                        />
                        Walked
                        <Checkbox
                          inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                        />
                        Played
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
  withRouter(connect(mapStoreToProps)(VolDoggoPage))
);
