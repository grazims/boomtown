import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
//import ItemGrid from "../../components/ItemGrid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";

class ShareItemForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.grandecontainer}>
        <div className={classes.container1}>
          <form>
            <h1>Share. Borrow. Prosper.</h1>
            <Button variant="contained" color="primary">
              Select an Image
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
