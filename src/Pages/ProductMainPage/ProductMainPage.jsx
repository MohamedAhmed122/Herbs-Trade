import React from "react";
import { Fragment } from "react";
import ProductOverview from "../../Components/ProductMenu/ProductMenu";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Background from "../../assets/plant.jpg";
const ProductPage = () => {
  const classes = useStyle();
  return (
    <Fragment>
        <Grid
            container
            style={{ height: "42em", marginBottom: "12rem" }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
        >
            <Grid item>
            <Typography className={classes.info} variant="h3">
                We provide over{" "}
                <span
                style={{
                    color: "#FFEB3B",
                    fontFamily: "Pacifico",
                    fontSize: "5rem",
                }}
                >
                20
                </span>{" "}
                products
            </Typography>
            </Grid>
        </Grid>
        <ProductOverview />
    </Fragment>
  );
};
export default ProductPage;

const useStyle = makeStyles((theme) => ({
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
    marginLeft: "25rem",
    color: "#4CAF50",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0rem",
    },
  },
}));
