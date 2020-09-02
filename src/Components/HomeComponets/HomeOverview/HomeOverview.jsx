import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyle from "./Styles";


import { Link } from "react-router-dom";

const HomeOverview = ({ MenusItem }) => {
  const classes = useStyle();

  return (
    <Fragment>
        {MenusItem.map((item) => (
            <Grid item key={item.id}>
            <Grid
                container
                style={{
                marginBottom: "2rem",
                backgroundImage: `url(${item.image})`,
                }}
                alignItems="center"
                direction="row"
                className={classes.infoBackground}
                component={Link}
                to={item.link}
            >
                <Grid className={classes.card}>
                <Typography variant="h6">{item.title.toUpperCase()}</Typography>
                <Typography variant="subtitle1">SHOP NOW</Typography>
                </Grid>
            </Grid>
            </Grid>
        ))}
    </Fragment>
  );
};

export default HomeOverview;
