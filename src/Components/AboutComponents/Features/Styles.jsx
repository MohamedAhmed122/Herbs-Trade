import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "1em",
    fontFamily: "Cormorant Garamond, serif",
  },
  icon: {
    marginLeft: "2em",
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  title: {
    marginTop: "5rem",
    marginBottom: "1rem",
    color: "#4CAF50",
  },

serviceContainer: {
    marginTop: "12em",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
        padding: 25,
    },
  },
}));
