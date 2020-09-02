import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import history from "../../../assets/History2.svg";

import useStyles from './Styles'


const History = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid container item style={{marginTop: '14rem'}}> 
            <Typography variant="h2" className={classes.aboutTitle}>
            History
            </Typography>
        </Grid>
        <Grid container>
            <Grid item className={classes.historyGrid}>
            <Typography variant="h5" style={{ color: "#FFEB3B" }}>
                We’re the old father on the block.
            </Typography>
            <Typography className={classes.subTitle} variant="subtitle1" paragraph>
                herbs trades is a leading Egyptian company specialized in Growing,
                producing, and Exporting dried herbs and spices to all over the
                world.
            </Typography>
            <Typography className={classes.subTitle} variant="subtitle1" paragraph>
                Herbs trades Company is Located in cairo, Egypt. We are able to
                further assure the quality of our products by processing and
                packaging in our facility according to Good Manufacturing Practices.
            </Typography>
            <Typography className={classes.subTitle} variant="subtitle1" paragraph>
                We utilize stringent quality control in our material handling
                procedures to assure that any impurities are removed. Unlike some
                other companies,we mill and sift the items presented in our
                extensive selection of herbs, spices, Seeds.
            </Typography>
            </Grid>
            <Grid item>
            <img className={classes.historyImg} src={history} alt="history" />
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default History;