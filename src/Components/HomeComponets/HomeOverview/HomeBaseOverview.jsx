import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import product from "../../../assets/other.png";
import spices from "../../../assets/Spices.png";
import herbs from "../../../assets/herbs.png";
import seeds from "../../../assets/seeds.png";
import HomeOverview from "./HomeOverview";

const HomeBaseOverview = () => {
  const classes = useStyles();
  const MenusItem = Menu;
  return (
    <Fragment>
        <Grid container style={{ marginBottom: "9rem" }}>
            <Grid item lg={1}></Grid>
            <Grid item lg={10}>
            <Typography
                variant="h3"
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
                className={classes.mainText}
            >
                We Provide Over{" "}
                <span
                style={{
                    color: "#FFEB3B",
                    fontFamily: "Pacifico",
                    fontSize: "3rem",
                }}
                >
                20
                </span>{" "}
                Products
            </Typography>
            <Grid container justify="space-around">
                <HomeOverview MenusItem={MenusItem} />
            </Grid>
            </Grid>
            <Grid item lg={10}></Grid>
        </Grid>
    </Fragment>
  );
};
export default HomeBaseOverview;

const Menu = [
  {
    image: herbs,
    title: "Herbs",
    id: 1,
    link: "/products/herbs",
  },
  {
    image: seeds,
    title: "Seeds",
    id: 2,
    link: "/products/seeds",
  },
  {
    image: spices,
    title: "Spices",
    id: 3,
    link: "/products/spices",
  },
  {
    image: product,
    title: "Specials",
    id: 1,
    link: "/products/specialProduct",
  },
];
