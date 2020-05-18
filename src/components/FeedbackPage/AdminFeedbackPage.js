import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
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
    card: {
      maxWidth: "250px",
      boxShadow: "10px 8px 40px -12px rgba(0,0,0,1)",
    },
  });

class AdminFeedbackPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_FEEDBACK",
    });
  }

  deleteFeedback = (id, event) => {
    this.props.dispatch({
      type: "DELETE_FEEDBACK",
      payload: `/api/feedback/${id}`,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container maxWidth={false}>
          <h1>Feedback</h1>
          <div class="cards">
            <Grid container spacing={5}>
              {this.props.store.feedback.map((item, index) => (
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <div key={index}>
                      <ul>
                        <CardContent>
                          <li>{item.comments}</li>
                          <li>{item.issues}</li>
                          <li>{item.thank_yous}</li>
                        </CardContent>
                        <CardActions>
                          <Button
                            onClick={(event) =>
                              this.deleteFeedback(item.id, event)
                            }
                            variant="contained"
                            size="small"
                            color="default"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </ul>
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
  withRouter(connect(mapStoreToProps)(AdminFeedbackPage))
);
