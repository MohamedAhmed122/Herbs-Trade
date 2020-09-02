import { makeStyles } from "@material-ui/core";
import hero from "../../assets/hero1.png";


export default makeStyles((theme) => ({
  grid: {
    marginRight: "auto",
    marginLeft: "10rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "7rem",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
    },
  },
  infoBackground: {
    ...theme.typography.infoBackground,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: ` url(${hero})`,
    height: "100%",
    width: "100%",
    
  },
  btns: {
    marginRight: "47rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  
  contactBtn: {
    backgroundColor: theme.palette.common.arcWhiteGreen,
    borderColor: theme.palette.common.arcWhiteGreen,
    borderWidth: 2,
    textTransform: "none",
    color: "white",
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "bold",
    height: 55,
    marginTop: "3rem",
    width: 175,
    "&:hover": {
        borderColor: theme.palette.common.arcWhiteGreen,
        backgroundColor: "white",
        color: theme.palette.common.arcWhiteGreen,
    },
  }
}));

