import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview.  
  Hint: It should look like any other Item card.

*/
//import ShareItemForm from "../../components/ShareItemForm";
//import ShareItemPreview from "../../components/ShareItemPreview";

// const Share = ({ classes }) => {
//   return (
//     <div>
//       <p>
//         This is the share page located at <code>/share</code>.
//       </p>
//     </div>
//   );
// };

//export default withStyles(styles)(Share);

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const items_form = [
  {
    value: "Household Items",
    label: "Household Items"
  },
  {
    value: "Tools",
    label: "Tools"
  },
  {
    value: "Eletronics",
    label: "Eletronics"
  },
  {
    value: "Physical Media",
    label: "Physical Media"
  },
  {
    value: "Sporting Goods",
    label: "Sporting Goods"
  },
  {
    value: "Musical Instruments",
    label: "Physical Media"
  },
  {
    value: "Recreational Equipment",
    label: "Recreational Equipment"
  }
];

function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name your item"
        className={classes.textField}
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Describe your item"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-select-currency"
        select
        label="Add some tags"
        className={classes.textField}
        value={values.items_form}
        onChange={handleChange("items_form")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
      >
        {items_form.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}

export default TextFields;
