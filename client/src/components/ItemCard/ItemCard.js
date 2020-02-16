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

const ItemCard = ({ classes, item }) => {
  console.log("item", item);
  return (
    <Card className={classes.card}>
      <div className={classes.grandecontainer}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://wallup.net/wp-content/uploads/2015/12/119794-landscape-stars-748x421.jpg"
          />
          {/* <CardContent>{item.title}</CardContent> */}
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
          <h2>{item && item.title ? item.title : "No title"}</h2>
          <p>
            {item && item.tags
              ? item.tags
                  .map(tag => {
                    return tag.title;
                  })
                  .join(", ")
              : "No tags"}
          </p>
          <h3>
            {item && item.description ? item.description : "No description"}
          </h3>
        </div>
        <CardActions>
          <Button size="small" color="primary">
            Borrow
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);

//mudar => itemCard = lado esquerdo, para ser usado em diversas paginas
// imagem, profile name, data, name your item, desc your item, botao 'borrow'
