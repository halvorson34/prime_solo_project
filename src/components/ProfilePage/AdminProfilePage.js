import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";

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

class AdminProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMIN",
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container maxWidth={false}>
          <h1>Admin Profile Page</h1>
          <div class="profileCard">
            {this.props.store.admin.map((item, index) => (
              <Card className={classes.card}>
                <div key={index}>
                  <CardMedia
                    className={classes.imgMedia}
                    image={item.picture}
                    title={item.first_name}
                  />
                  <ul>
                    <CardContent>
                      <li>First Name: {item.first_name}</li>
                      <li>Last Name: {item.last_name}</li>
                      <li>Username: {item.username}</li>
                      <li>Member Since: {item.member_since}</li>
                    </CardContent>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(AdminProfilePage))
);
