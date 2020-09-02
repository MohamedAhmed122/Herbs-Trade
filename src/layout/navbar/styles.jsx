const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  // navbar//
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "",
    [theme.breakpoints.down("md")]: {
      marginBottom: "",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '',
    },
  },

  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },

  // Drawer//
  drawer: {
    backgroundColor: theme.palette.common.arcGreen,
  },
  text: {
    color: "black",
    ...theme.typography.drawer,
  },
  estimate: {
    backgroundColor: theme.palette.common.arcYellow,
    ...theme.typography.estimate,
  },
  // Tabs  //
  tab: {
    ...theme.typography.tab,
    color: 'black',
  },
  btn: {
    padding: "0.7rem 2.4rem",
    color: "black",
    backgroundColor:  theme.palette.common.arcYellow,
    "&:hover": {
        backgroundColor:  theme.palette.common.arcYellow,
    },
    margin: " 0 3rem 0 2rem" ,
  },

  // menu //
  menu: {
    ...theme.typography.menu,
    backgroundColor: theme.palette.common.arcGreen,
    color: "black",
    width: "12rem",
  },
  menuItem: {
    marginTop: "0.7rem",
    marginLeft: "1rem",
    fontFamily: "Raleway",
    fontWeight: 400,
    opacity: 0.5,
    "&:hover": {
      opacity: 1.3,
    },
  },
}));
