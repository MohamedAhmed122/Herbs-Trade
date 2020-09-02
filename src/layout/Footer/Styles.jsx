import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    footer: {
        backgroundColor:  theme.palette.common.arcGreen,
        width: "100%",
        zIndex: 1302,
        },
    
        link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "1.1rem",
        fontWeight: 500,
        textDecoration: "none",
        },
        gridItem: {
        margin: "3em",
        },
        icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        },
        },
        socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        },
    },
}));
  