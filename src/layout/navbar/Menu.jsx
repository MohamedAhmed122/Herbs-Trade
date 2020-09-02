import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import useStyles from './styles'
import { Link } from "react-router-dom";

const MenuDropdown = ({ setOpen, setAnchorEl, anchorEl, open }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = [
    { name: " Products", link: "/products" },
    { name: " Herbs Products", link: "/herbs" },
    { name: " Spices Products", link: "/spices" },
    { name: " Seeds Products", link: "/seeds" },
    { name: " Special Products", link: "/specialProduct" },
  ];
  const handleMenuItem = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };
  return (
    <Menu
        id="simple-menu"
        onClose={() => setOpen(false)}
        anchorEl={anchorEl}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        open={open}
        MenuListProps={{ onMouseLeave: () => setOpen(false) }}
        classes={{ paper: classes.menu }}
        elevation={0}
        >
        {menuItems.map((item, i) => (
            <MenuItem
            divider
            button
            key={i}
            classes={{ root: classes.menuItem }}
            component={Link}
            to={item.link}
            onClick={(e) => handleMenuItem(e, i)}
            selected={i === selectedIndex}
            >
            {item.name}
            </MenuItem>
        ))}
    </Menu>
);
};
export default MenuDropdown