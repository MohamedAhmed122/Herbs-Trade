import { makeStyles } from "@material-ui/core";




export default makeStyles((theme) => ({

    // About hero //
    img: {
        width: "50rem",
        height: "50rem",
        [theme.breakpoints.down("sm")]: {
        width: "19rem",
        height: "19rem",
        },
        [theme.breakpoints.down("md")]: {
        width: "30rem",
        height: "30rem",
        marginLeft: "5rem",
        },
    },
    text: {
        marginTop: "18rem",
        color: "#4CAF50",
        marginLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
        marginLeft: "5rem",
        fontSize: "1rem",
        },
        [theme.breakpoints.down("md")]: {
        marginTop: "12rem",
        marginLeft: "1rem",
        fontSize: "1.4rem",
        },
    },
    subText: {
        color: "#4CAF50",
        marginLeft: "6rem",
        marginTop: "2rem",
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("md")]: {
        marginLeft: "7rem",
        fontSize: "1.4rem",
        },
    },

    // history hero //
    historyGrid: {
        width: "50rem",
        marginLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
        marginLeft: "2rem",
        width: "30rem",
        },
    },
    historyImg: {
        height: "20rem",
        marginLeft: "2rem",
        width: "30rem",
        [theme.breakpoints.down("sm")]: {
        width: "25rem",
        marginBottom: "10rem",
        },
    },
    aboutTitle: {
        marginLeft: "4rem",
        color: "#4CAF50",
        margin: "1rem",
    },
    subTitle:{
        fontSize: '1.2rem',
        marginBottom: "1em",
        fontFamily: 'Cormorant Garamond, serif',
    }
}));
