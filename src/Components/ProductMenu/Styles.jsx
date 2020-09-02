import { makeStyles } from "@material-ui/core";



export default makeStyles((theme) => ({
    infoBackground: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "95%",
        marginLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginLeft: "0rem",
        },
        },
        mainHerbs: {
            fontSize: "3rem",
            color: '#4CAF50',
            fontFamily: "Oswald, sans-serif",
            fontWeight: 400,
            marginBottom: "1.3rem",
            filter: " brightness(100%)",
            marginTop: "4rem",
        marginRight: "50rem",
    
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem",
            marginRight: "43rem",
        },
    
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
            marginRight: "5rem",
        },
        },
    
        subHerbs: {
            fontSize: "1.4rem",
            color: "white",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 200,
            marginBottom: "1.3rem",
            
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            marginRight: "1rem",
        },
        },
        btn: {
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
            borderWidth: 2,
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            height: 55,
            marginTop: "2rem",
            
            width: 175,
            "&:hover": {
            borderColor: "#4CAF50",
            backgroundColor: "white",
            color: "#4CAF50",
            }
        },
        //         {/* -----------                     Spices                    ---------*/}
        mainSpices: {
            fontSize: "3rem",
            color: '#4CAF50',
            fontFamily: "Oswald, sans-serif",
            fontWeight: 400,
            marginBottom: "1.3rem",
            filter: " brightness(100%)",
            marginTop: "4rem",
        marginLeft: "56rem",
    
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem",
            marginLeft: "43rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
            marginLeft: "1rem",
        },
        },
        subSpices: {
            fontSize: "1.4rem",
            color: "white",
            fontFamily: "Oswald, sans-serif",
            fontWeight: 200,
            marginBottom: "1.3rem",
        textAlign: "right",
        [theme.breakpoints.down("md")]: {
            fontSize: "1rem",
            marginLeft: "12rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            marginLeft: "1rem",
        },
        },
        Sbtn: {
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
            borderWidth: 2,
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            height: 55,
            marginTop: "2rem",
            marginLeft: "72rem",
            width: 175,
            "&:hover": {
            borderColor: "#4CAF50",
            backgroundColor: "white",
            color: "#4CAF50",
            },
        
        

        [theme.breakpoints.down("md")]: {
            marginLeft: "47rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "1rem",
        },
        },
  }));