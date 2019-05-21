import sizes from "./mediaSizes";
import bg from "./bg.svg";

export default {
  root: {
    minHeight: "100vh",
    backgroundColor: "#0058a1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "60%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    height: "50px",
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
    gridGap: "1.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: ".5rem"
    }
  }
};
