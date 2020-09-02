import React, { Fragment } from "react";
import { AppBar, Toolbar, useTheme, useMediaQuery } from "@material-ui/core";

import NavbarTabs from "./Tabs";
import Drawer from "./Drawer";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>{match ? <Drawer /> : <NavbarTabs />}</Toolbar>
      </AppBar>

      <div className={classes.ToolbarMargin} />
    </Fragment>
  );
};
export default Navbar;
