import React from "react";
import { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import about from "../../../assets/Plant.svg";
import EcoIcon from "@material-ui/icons/Eco";

import useStyle from './Styles'

const AboutHero = () => {
  const classes = useStyle();
  return (
    <Fragment>
        <Grid container direction="row" >
            <Grid item>
            <Typography className={classes.text} variant="h4">
                Would you Like To know More About us
            </Typography>
            <Typography className={classes.subText} variant="h4">
                Let's get Personal{" "}
            </Typography>
            <div>
                <div style={{ marginTop: "1rem", marginLeft: "2rem" }}>
                <EcoIcon style={{ color: "#4CAF50", marginLeft: "7rem" }} />{" "}
                <EcoIcon style={{ color: "#FFEB3B" }} />{" "}
                <EcoIcon style={{ color: "#4CAF50" }} />
                </div>
            </div>
            </Grid>
            <Grid item style={{ textAlign: "right" }}>
            <img className={classes.img} src={about} alt="svg about us" />
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default AboutHero;