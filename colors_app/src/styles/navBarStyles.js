import sizes from "./mediaSizes";

export default {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "8vh"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle,.rc-slider-handle:active, .rc-slider-handle:hover,.rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "15px",
      height: "15px",
      marginLeft: "-7px"
    },
    [sizes.down("xs")]: {
      width: "200px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1.5rem",
    [sizes.down("xs")]: {
      display: "none"
    }
  }
};
