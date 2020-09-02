
import React, { Fragment } from "react";
import { Grid} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
import useStyle from './Styles'

const Header = ({ Product }) => {
  console.log(Product);
  const classes = useStyle();
  return (
    <Fragment>
        <Grid
            container
            style={{
            height: "20em",
            marginBottom: "2rem",
            backgroundImage: `url(${Product.image})`,
            }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
        ></Grid>
        <div>
            <EcoIcon style={{ color: "#4CAF50", marginLeft: '7rem',}} />{" "} 
            <EcoIcon style={{ color: "#FFEB3B"}} />{" "}
            <EcoIcon style={{ color: "#4CAF50" }} />
        </div>
    </Fragment>
  );
};
export default Header;