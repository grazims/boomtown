import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grow, Grid } from "@material-ui/core";
import ItemCard from "../ItemCard";

class ItemGrid extends Component {
  render() {
    const { items } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={5} className={classes.gridContainer}>
          {items.map((item, i) => {
            return (
              <Grow
                className={classes.grid}
                in={!!item}
                key={item.id}
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <Grid item xs={12} md={6} lg={4}>
                  <ItemCard item={item} />
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ItemGrid);
