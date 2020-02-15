//import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(10),
      width: 200
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  grandecontainer: {
    //display: "flex",
    // flexDirection: "column",
    marginLeft: 90,
    maxWidth: 345,
    margin: 20,
    width: 330
  },

  container1: {
    //display: "flex",
    // flexDirection: "row-reverse",
    margin: 5
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
});

export default styles;
