import React, {Fragment , useState} from 'react'

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,

} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import useStyles from './styles'

const Drawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const DrawersItem = [
    { name: " Home ", link: "/" },
    { name: " Products ", link: "/products" },
    { name: " Herbs ", link: "/products/herbs" },
    { name: " Special Products", link: "/products/seeds" },
    { name: " Spices ", link: "/products/spices" },
    { name: " About Us ", link: "/about" },
  ];

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.ToolbarMargin}style={{marginTop: '1rem'}} />
        {DrawersItem.map((item, i) => (
          <List key={i} >
            <ListItem
              component={Link}
              to={item.link}
              button
              divider
              onClick={() => setOpen(false)}
            >
              <ListItemText className={classes.text}> {item.name}</ListItemText>
            </ListItem>
          </List>
        ))}
        <List>
          <ListItem
            className={(classes.text, classes.estimate)}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            to='/contact'
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        style={{ marginLeft: "auto" }}
        onClick={() => setOpen(!open)}
        disableRipple
      >
        <MenuIcon style={{ height: "50px", width: "50px" }} />
      </IconButton>
    </Fragment>
  );
};
export default Drawer; 