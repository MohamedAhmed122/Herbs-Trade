import React from "react";

import { Link } from "react-router-dom";
import useStyles from "./Styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/products"
                className={classes.link}
                style={{ marginLeft: "0.6rem" }}
              >
                Products
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/products/herbs"
                className={classes.link}
              >
                Herbs
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/products/specialProduct"
                className={classes.link}
              >
                special Products
              </Grid>
              <Grid
                item
                component={Link}
                style={{ marginLeft: "0.6rem" }}
                to="/products/seeds"
                className={classes.link}
              >
                Seeds
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                The Farm
              </Grid>
              <Grid item component={Link} to="/about" className={classes.link}>
                The Factory
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Hello@Hello.com
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Info@herbstrades.com
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Sales@herbstrades.com
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="flex-end"
          spacing={2}
          className={classes.socialContainer}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com/herbstrades/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://api.whatsapp.com/send?phone=+201099953285"
            rel="noopener noreferrer"
            target="_blank"
          >
            
            <WhatsAppIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com/herbstrades/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon fontSize="large" className={classes.icon} />
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
};

export default Footer;
