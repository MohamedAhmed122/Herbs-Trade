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
        arcMaxGreen: arcWhiteGreen,
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
        mainText:{
            marginLeft: '3rem',
            color: "#ecce76",
            fontSize: "1.5rem",
            margin: "1rem 1rem 1rem 0",
        },
        infoBackground:{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
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
        
    }
},
});
