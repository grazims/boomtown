const styles = theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    lineHeight: 1.7
  },
  texto: {
    margin: 15
  },
  bigAvatar: {
    width: 60,
    height: 60,
    paddingLeft: 15,
    paddingTop: 15
  },
  card: {
    margin: 20,
    width: 400,
    height: 510,
    marginRight: 90
  },
  cardName: {
    fontSize: 24
  },
  media: {
    height: 190
  },
  avatarName: {
    margin: 0,
    fontSize: 16
  },
  avatarDate: {
    margin: 0,
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 16
  },
  borrowBotton: {
    width: "30%",
    height: "7%",
    marginTop: "20px",
    marginLeft: "10px",
    marginBottom: "10px",
    border: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.54)"
  },
  tagName: {
    color: "rgba(0, 0, 0, 0.54)"
  },
  descName: {
    fontSize: 16
  }
});
export default styles;
