import React from "react";
import { Fragment } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyle from './Styles';
import { Link } from "react-router-dom";
const HeroHome = () => {
  const classes = useStyle();
  return (
    <Fragment>
        <Grid
            container
            style={{ height: "750px", marginBottom: "8rem" }}
            alignItems="center"
            direction="column"
            className={classes.infoBackground}
        >
            <Grid item className={classes.grid} style={{ marginTop: "10rem" }}>
            <Typography variant="h2">Finding The </Typography>
            <Typography variant="h2">difference with </Typography>
            <Typography style={{ color: "#4CAF50" }} variant="h2">
                Herbs Trades
            </Typography>
            </Grid>
            <Grid item className={classes.grid}>
            <Grid container direction="row" spacing={3}>
                <Grid item>
                <Button component={Link} to='/products' className={classes.contactBtn} variant="outlined">
                    Take a Tour <ArrowForwardIcon />
                </Button>
                </Grid>
                
            </Grid>
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default HeroHome;