export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: ".5rem",
    position: "relative",
    overflow: "hidden",
    border: "2px solid black",
    cursor: "pointer",
    "&:hover svg": {
      opacity: "1",
      transition: ".3s linear"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: ".5rem",
    fontsize: "1.5rem"
  },
  minicolor: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px"
  },
  delete: {},
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: 10,
    padding: "5px",
    borderRadius: "0 0 0 5px",
    opacity: "0",
    transition: ".3s linear"
  }
};
