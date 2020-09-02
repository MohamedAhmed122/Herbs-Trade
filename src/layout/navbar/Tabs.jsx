import React, { useState, Fragment } from "react";
import { Tabs, Tab, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuDropdown from "./Menu";

import useStyles from "./styles";

const NavbarTabs = () => {
const [value, setValue] = useState(0);
const [anchorEl, setAnchorEl] = useState(null);
const [open, setOpen] = useState(false);
const classes = useStyles();
  return (
    <Fragment>
        <Tabs
            style={{ marginLeft: "auto", color: 'black' }}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            
        >
            <Tab component={Link} to="/" label="Home" className={classes.tabs} />
            <Tab
            label="Products"
            component={Link}
            to="/products"
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup={anchorEl ? "true" : null}
            onMouseOver={(e) => {
                setOpen(true);
                setAnchorEl(e.currentTarget);
            }}
            />
            <Tab
            label="About Us"
            component={Link}
            to="/about"
            className={classes.tabs}
            />
        </Tabs>
        <Button
            variant="contained"
            component={Link}
            to="/contact"
            className={classes.btn}
        >
            Contact Us
        </Button>
        <MenuDropdown
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            setOpen={setOpen}
        /> 
    </Fragment>
  );
};

export default NavbarTabs