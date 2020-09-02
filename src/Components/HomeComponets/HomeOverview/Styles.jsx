import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainText: {
    color: theme.palette.common.arcWhiteGreen,
    fontWeight: 200,
    fontSize: "2rem",
    marginLeft: "2rem",
  },
  infoBackground: {
    textDecoration: "none",
    color: "black",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "35rem",
    height: "20rem",
    cursor: "pointer",
    borderRadius: "2rem",
    filter: " brightness(85%)",
    overflow: "hidden",
    display: "flex",
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15rem",
      height: "15rem",
      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "20rem",
      height: "20rem",
      margin: 0,
    },
  },

  card: {
    height: "110px",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    left: "35%",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "white",
    opacity: 0.5,
    position: "relative",
    "&:hover": {
      opacity: 0.7,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
}));
