import { flexbox } from "@material-ui/system";

const styles = theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  containerText: {
    display: "flex",
    flexDirection: "column"
  },
  texto: {
    margin: 15
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  card: {
    maxWidth: 345,
    margin: 20,
    width: 330,
    marginRight: 90
  },
  media: {
    height: 190,
    width: 340
  },
  avatarName: {
    margin: 10
  },
  avatarDate: {
    margin: 10,
    color: "gray"
  }
});
export default styles;
