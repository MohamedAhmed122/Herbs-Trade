import React, { Fragment } from "react";
import { Grid,  Typography, Button } from "@material-ui/core";

import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import herbs from "../../assets/herbs1.png";
import spicesBackground from "../../assets/Spices2.png";
import seeds from "../../assets/seeds2.png";
import special from "../../assets/other2.png";
import { Link } from "react-router-dom";
import useStyles from './Styles'

const ProductMenu = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        style={{
          height: "450px",
          marginBottom: "2rem",
          backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${herbs})`,
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainHerbs}>
            Make Mealtimes Herbalicious
          </Typography>
          <Typography className={classes.subHerbs} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            Fresh herbs can turn the simplest meal tinto something <br />
            exciting and special, Providing that extra character that bring
            other ingredients <br />
            into balance. <br />
            They add flavour, aroma, texture and colour to your culinary
            creations
            <FormatQuoteIcon />
          </Typography>
          <Button
            variant="outlined"
            className={classes.btn}
            component={Link}
            to="/products/herbs"
          >
            Read More <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
          </Button>
        </Grid>
      </Grid>
      {/* -----------                     Spices                    ---------*/}
      <Grid
        container
        style={{
          height: "450px",
          marginBottom: "2rem",
          backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${spicesBackground})`,
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainSpices}>
            Various Taste & Flavours
          </Typography>
          <Typography className={classes.subSpices} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            Spices are one of the most important products that are used in the
            <br />
            kitchen and used in many industries such as medicine, perfumes and
            <br />
            flavors, and they give a better results dried than fresh.
            <FormatQuoteIcon />
          </Typography>
          <Button
            variant="outlined"
            className={classes.Sbtn}
            component={Link}
            to="/products/spices"
          >
            <ArrowForwardIcon
              style={{ transform: "scaleX(-1)", marginRight: "0.5rem" }}
            />{" "}
            Read More
          </Button>
        </Grid>
      </Grid>
      {/* -----------                     seeds                    ---------*/}
      <Grid
        container
        style={{
          height: "450px",
          marginBottom: "2rem",
          backgroundImage: ` linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${seeds})`,
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainHerbs}>
            indispensable Products
          </Typography>
          <Typography className={classes.subHerbs} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            Seeds are products of indispensable importance in extracting oils,
            <br />
            tea and flavors, and they are also involved in many industries.
            <FormatQuoteIcon />
          </Typography>
          <Button
            variant="outlined"
            className={classes.btn}
            component={Link}
            to="/products/seeds" 
          >
            Read More <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
          </Button>
        </Grid>
      </Grid>
      {/* -----------                     special                    ---------*/}
      <Grid
        container
        style={{
          height: "450px",
          marginBottom: "2rem",
          backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${special})`,
        }}
        alignItems="center"
        direction="column"
        className={classes.infoBackground}
      >
        <Grid item>
          <Typography variant="h4" className={classes.mainSpices}>
            Special Products
          </Typography>
          <Typography className={classes.subSpices} variant="subtitle1">
            <FormatQuoteIcon style={{ transform: "scaleX(-1)" }} />
            They are Egyptian products characterized by their high quality,
            <br /> they are very excellent Egyptian garlic of all sizes,
            Egyptian onions<br /> that are 
            rich in definition, and Egyptian dried tomatoes.
            <FormatQuoteIcon />
          </Typography>
          <Button
            variant="outlined"
            className={classes.Sbtn}
            component={Link}
            to="/products/specialProduct"
          >
            <ArrowForwardIcon
              style={{ transform: "scaleX(-1)", marginRight: "0.5rem" }}
            />{" "}
            Read More
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default  ProductMenu