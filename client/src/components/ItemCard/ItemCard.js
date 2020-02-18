import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Avatar
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const ItemCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.grandecontainer}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              item && item.itemImg
                ? item.itemImg
                : "https://wallup.net/wp-content/uploads/2015/12/119794-landscape-stars-748x421.jpg"
            }
          />
        </CardActionArea>
        <div className={classes.root}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1_cB_z2jVf-eK2Yo6ePIJMwt5DWNnazeauE9BKh9C4P8cVMs&s"
            className={classes.bigAvatar}
          />
          <div className={classes.containerText}>
            <p className={classes.avatarName}>
              {item && item.itemowner ? item.itemowner.fullname : "No Owner"}
            </p>
            <p className={classes.avatarDate}>date</p>
          </div>
        </div>
        <div className={classes.texto}>
          <p className={classes.cardName}>
            {item && item.title ? item.title : "No title"}
          </p>
          <p className={classes.tagName}>
            {item && item.tags ? item.tags.join(", ") : "No tags"}
          </p>
          <p className={classes.descName}>
            {item && item.description ? item.description : "No description"}
          </p>
        </div>
        <CardActions>
          <Button size="small" className={classes.borrowBotton}>
            Borrow
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
