import { DRAWER_WIDTH } from "../constants";
import sizes from "./mediaSizes";

const drawer = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawer}px)`,
    marginLeft: `-${drawer}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("sx")]: {
      marginRight: "0"
    }
  },
  button: {
    margin: "0 .5rem",
    [sizes.down("xs")]: {
      margin: "0",
      padding: "2px"
    }
  }
});

export default styles;
