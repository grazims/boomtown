import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Avatar
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.grandecontainer}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://wallup.net/wp-content/uploads/2015/12/119794-landscape-stars-748x421.jpg"
            />
            <CardContent></CardContent>
          </CardActionArea>
          <div className={classes.root}>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s"
              className={classes.bigAvatar}
            />
          </div>
          <div className={classes.texto}>
            <h2>nome da foto</h2>
            <p>TAG</p>
            <h3>descrição</h3>
          </div>
          <CardActions>
            <Button size="small" color="primary">
              Borrow
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
