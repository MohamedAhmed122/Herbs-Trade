import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    icon: {
        textAlign: "center",
        marginLeft: "2rem",
        marginRight: "2rem",
    },
    list: {
        textAlign: "center",
        color: "#388E3C",
        fontSize: "2rem",
        borderBottom: "0.5px solid #388E3C ",
    },
    text: {
        color: "#388E3C",
        fontWeight: "bold",
    },
    details: {
        marginLeft: "4rem",
        color: "#FFEB3B",
        marginTop: "3rem",
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
        marginLeft: "1rem",
        width: 145,
        "&:hover": {
        backgroundColor: "white",
        borderColor: "#FFEB3B",
        },
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
}));
