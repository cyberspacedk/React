export default {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    width: "80%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "#fff"
    }
  },
  pallets: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};
