import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    infoBackground: {
        backgroundPosition: "center",
        borderRadius: "8px",
        boxShadow: theme.shadows[10],
        filter: " brightness(70%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        marginTop: "3rem",
        [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: "1rem",
        },
        "&:hover": {
            transform: "scale(1.1)",
            transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
            filter: " brightness(100%)",
            [theme.breakpoints.down("sm")]: {
                transform: "scale(1.03)",
            },
        },
    },
    info: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
        marginLeft: "7rem",
        },
    },
}));
