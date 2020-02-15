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
          <form className={classes.container1}>
            <h1>Share. Borrow. Prosper.</h1>
            <Button variant="contained" color="primary">
              Select an Image
            </Button>
            <p>name your item</p>
            <p>desc your item</p>
            <p>add some tags</p>
            <Button variant="contained" color="primary">
              Share
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);

// const refetchQueries = [
//   {
//     query: ALL_ITEMS_QUERY
//   }
// ];

// export default compose(
//   graphql(ADD_ITEM_MUTATION, {
//     options: {
//       refetchQueries
//     },
//     name: "addItemMutation"
//   }),
//   withStyles(styles)
// );

//ERRADO

//SHARE ITEM FORM eh do lado direito
