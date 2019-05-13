
export default {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "87vh"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline- block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      border: "none",
      backgroundColor: "rgba(255,255,255,.3)",
      lineHeight: "30px",
      color: "white",
      textTransform: "uppercase",
      transition: "all .3s linear"
    }
  }
};