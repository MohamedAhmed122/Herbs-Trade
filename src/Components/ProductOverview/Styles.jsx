import { makeStyles } from "@material-ui/core";
import Background from "../../assets/plant.jpg";

export default makeStyles((theme) => ({
    infoBackground: {
        backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    info: {
        textAlign: "center",
        marginLeft: "34rem",
        color: "#4CAF50",
        [theme.breakpoints.down("sm")]: {
        marginLeft: "7rem",
        },
    },
    learn: {
        backgroundColor: "white",
        borderColor: "#FFEB3B",
        borderWidth: 2,
        textTransform: "none",
        color: "#FFEB3B",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        "&:hover": {
        backgroundColor: "white",
        borderColor: "#FFEB3B",
        },
        marginLeft: "1rem",
    },
    order: {
        backgroundColor: "white",
        borderColor: "#4CAF50",
        borderWidth: 2,
        textTransform: "none",
        color: "#4CAF50",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        "&:hover": {
        borderColor: "#4CAF50",
        backgroundColor: "white",
        },
    },
    img: {
        marginLeft: "rem",
        height: "300px",
        width: "350px",
        filter: " brightness(70%)",
        "&:hover": {
        filter: " brightness(100%)",
        },
    },
    subCard: {
        marginBottom: "4rem",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        borderWidth: "5px",
        borderColor: "#4CAF50",
        [theme.breakpoints.down("sm")]: {
        marginBottom: "3rem",
        },

        "&:hover": {
        boxShadow: theme.shadows[4],
        borderWidth: "8px",
        borderBottomStyle: "solid",
        },
    },
}));
