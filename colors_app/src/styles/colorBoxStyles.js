import chroma from "chroma-js";
import sizes from "./mediaSizes";

export default {
  colorBox: {
    width: "20%",
    height: props => (props.isShowFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "all .3s linear"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.isShowFullPalette ? "20%" : "33.3%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.isShowFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.isShowFullPalette ? "5%" : "10%")
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.8 ? "#fff" : "#000"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff",
    background: "rgba(255,255,255, .3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButtom: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255,255,255,.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    transition: "all .3s linear",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform .6s ease-in-out"
  },
  shadowOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
    transition: "transform .6s ease-in-out"
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(.1)",
    opacity: "0",
    color: "white"
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all .5s ease-in-out .3s",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255,255,255, .2)",
      width: "100vh",
      textAlign: "center",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem"
      }
    },
    "& p": {
      textAlign: "center",
      fontSize: "2rem",
      textShadow: "1px 2px black",
      fontWeight: "100"
    }
  }
};
