import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

// const name = [
//   "Household Items",
//   "Tools",
//   "Eletronics",
//   "Physical Media",
//   "Sporting Goods",
//   "Musical Instruments",
//   "Recreational Equipment"
// ];

export default function BasicTextFields() {
  const classes = styles();

  return (
    <div className={styles}>
      <form className={classes.root} noValidate autoComplete="off">
        <h1>Share. Borrow. Prosper</h1>
        <Button variant="contained" color="primary">
          Select an Image
        </Button>
        <TextField id="standard-basic" label="Name your item" />
        <TextField
          id="standard-full-width"
          label=""
          multiline
          placeholder="Describe your item"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField id="standard-basic" label="Add some tags" />
        <Button variant="contained" color="primary">
          Share
        </Button>
      </form>
    </div>
  );
}
