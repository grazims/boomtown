const styles = theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
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
    margin: 20
  },
  media: {
    height: 140
  }
});
export default styles;
