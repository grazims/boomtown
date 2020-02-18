const styles = theme => ({
  profileContainer: {
    backgroundColor: "#212121",
    padding: 60
  },
  container: {
    padding: 60,
    height: "250px",
    backgroundColor: "#fff",
    textAlign: "start",
    maxWidth: 1400,
    justifyContent: "start",
    marginLeft: 50
  },
  userName: {
    fontSize: 28,
    margin: 0,
    paddingLeft: 15,
    color: "rgba(0, 0, 0, 0.54)"
  },
  bio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start"
  },
  itemTitleContainer: {
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "column"
  },
  itemTitle: {
    paddingLeft: "7rem",
    color: "#f9a825",
    fontSize: 30,
    fontWeight: 400,
    margin: 0
  }
});

export default styles;
