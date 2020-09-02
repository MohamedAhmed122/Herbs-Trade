import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    sub: {
        fontSize: "1.2rem",

        marginBottom: "1em",
        fontFamily: "Cormorant Garamond, serif",
        width: "40rem",
        [theme.breakpoints.down("md")]: {
        width: "25rem",
        marginLeft: "3rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "19rem",
            marginLeft: "2rem",
            },
    },
    title: {
        marginLeft: "3rem",
        color: "#4CAF50",
        fontSize: "1.5rem",
        margin: "1rem 1rem 1rem 0",
    },
    img: {
        marginLeft: "3rem",
    
        boxShadow: theme.shadows[4],
        borderRadius: 7,
        [theme.breakpoints.down("md")]: {
        width: "25rem",
        },
        [theme.breakpoints.down("md")]: {
            width: "17rem",
            },
    },
    mainTitle: {
        textAlign: "center",
        wordSpacing: 2,
        marginTop: "12rem",
    },
    after: {
        display: "block",
        height: "4px",
        width: 100,
        content: " ",
        marginTop: 10,
        backgroundColor: "#FFEB3B",
        margin: "0 auto",
    },
    img1: {
        color: "#FFEB3B",
        textAlign: "center",
        padding: "1rem",
        [theme.breakpoints.down("sm")]: {
        marginTop: "7rem",
        },
    },
    infoBackgroung: {
       // backgroundImage: ` linear-gradient(0deg, rgba(255,235,59,1) 0%, rgba(76,175,80,1) 51%, rgba(255,235,59,1) 100%),url()`,
        height: "4rem",
        width: "4rem",
        borderRadius: "50%",
        marginLeft: "5rem",
    },
    sub2: {
        width: "17rem",
        fontSize: "1.3rem",
        fontFamily: "Cormorant Garamond, serif",
        textAlign: "center",
    },
    title2: {
        textAlign: "center",
        color: "#4CAF50",
        margin: "1.5rem 0 0 0",
    },
}));
