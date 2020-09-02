import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#388E3C";
const arcWhiteGreen = "#4CAF50";
const arcYellow = "#FFEB3B";
const arcGrey='#868686'
export default createMuiTheme({
  palette: {
    common: {
        arcGreen: arcGreen,
        arcYellow: arcYellow,
        arcWhiteGreen: arcWhiteGreen,
        arcGrey: arcGrey
    },
    primary: {
        main: arcGreen,
    },
    secondary: {
        main: arcGreen,
    },
    typography: {
        subtitle1:{
            fontSize: "1rem",
            fontWeight: 200,
            color: arcGrey
        },
        tourBtn:{
            backgroundColor: arcWhiteGreen,
            borderColor: arcWhiteGreen,
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
                borderColor: arcWhiteGreen,
                backgroundColor: "white",
                color: arcWhiteGreen,
            },
        },
        heroContactBtn: {
            backgroundColor: arcYellow,
            borderColor: arcYellow,
            borderWidth: 2,
            textTransform: "none",
            marginTop: "3rem",
            marginRight: "2rem",
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            height: 55,
            width: 175,
            "&:hover": {
                borderColor: arcYellow,
                color: arcYellow,
                backgroundColor: "white",
            },
        },
        tab: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            fontWeight: 600,
            marginLeft: "20px",
            minWidth: 10,
        },
        drawer: {
            fontFamily: "Raleway",
            fontSize: "1rem",
        },
        
        subText:{
            fontSize: "1.2rem",
            marginBottom: "1em",
            fontFamily: "Cormorant Garamond, serif",
        },
       
        infoBackground:{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        },
        background:{
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
        },
        card:{

        },
        homeContactBtn:{

        },
        
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcWhiteGreen,
                fontSize: "1rem"
            }
            },
            MuiInput: {
            root: {
                color: arcYellow,
                fontWeight: 300
            },
            underline: {
                "&:before": {
                borderBottom: `2px solid ${arcWhiteGreen}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                borderBottom: `2px solid ${arcWhiteGreen}`
                }
            }
        }
    }
},
});
