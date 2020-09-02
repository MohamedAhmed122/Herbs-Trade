import React, { Fragment } from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PeopleIcon from "@material-ui/icons/People";
import EcoIcon from "@material-ui/icons/Eco";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Grid, Typography } from "@material-ui/core";

import useStyles from './Styles'


const HomeFeatures = () => {
const features = items;
const classes = useStyles();
return (
    <Fragment>
        <div>
            <Typography className={classes.mainTitle} variant="h4">
            Our Features
            </Typography>
        </div>
        <div className={classes.after}></div>
        <Grid
            container
            direction="row"
            justify="space-around"
            style={{ marginTop: "4rem", marginBottom: "12rem" }}
            alignItems="center"
        >
            {features.map((item) => (
            <Grid item key={item.id}>
                <Grid container direction="column">
                <Grid item >
                    <div className={classes.infoBackgroung}>
                    <div className={classes.img1}>{item.img}</div>
                    </div>
                </Grid>
                <Grid item>
                    <Typography variant="h6" className={classes.title2}>
                    {item.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.sub2}>
                    {item.description}
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            ))}
        </Grid>
    </Fragment>
  );
};


export default HomeFeatures;


const items = [
    {
        name: "Non-GMO Products",
        description:
        "We are a quality centric firm. To offer the best Agro Products to the clients, we only procure them from trusted farmers of the country who practice organic farming.",
        img: <AcUnitIcon fontSize="large" />,
    },
    {
        name: "Natural & Organic",
        description:
        "Our offered Agro Products are : 100% pure, Hygienically processed, Organically cultivated, Unadulterated, Nutritious, Carefully packed.",
        img: <EcoIcon fontSize="large" />,
    },
    {
        name: "Why Choose Us?",
        description:
        "The features that make us unique are : Fair business dealings Team of qualified professionals Organically grown Agro Products Associations with reputed farmers.",
        img: <VerifiedUserIcon fontSize="large" />,
    },
    {
        name: "Trainned Team",
        description:
        "The constant endeavour of our team is to work dedicatedly and sincerely towards delivering the best quality Agro Products to the clients at the most fair prices.",
        img: <PeopleIcon fontSize="large" />,
    },
];
