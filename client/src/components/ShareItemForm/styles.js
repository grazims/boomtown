import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
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
  container: {
    display: "flex",
    flexWrap: "column"
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

export default styles;
