import React from "react";
import { Fragment } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import useStyles from './Styles'
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ExploreIcon from "@material-ui/icons/Explore";
import { Link } from "react-router-dom";



const ProductOverview = ({ product }) => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid item>
            <Card className={classes.subCard}>
            <CardContent>
                <Grid container>
                <Grid item>
                    <img
                    src={product.photo}
                    className={classes.img}
                    alt=" The product "
                    />
                    <Grid item style={{ textAlign: "center" }}>
                    <Typography variant="h6" style={{ color: "#4CAF50" }}>
                        <ShoppingBasketIcon style={{ marginRight: "0.3rem" }} />{" "}
                        {product.name}
                    </Typography>
                    <Typography variant="h6" style={{ color: "#4CAF50" }}>
                        <CategoryIcon
                        style={{ marginRight: "0.3rem", color: "#FFEB3B" }}
                        />{" "}
                        {product.category}
                    </Typography>
                    <Typography variant="h6" style={{ color: "#4CAF50" }}>
                        <ExploreIcon
                        style={{ marginRight: "0.3rem", color: "#FFEB3B" }}
                        />{" "}
                        Originally From {product.originOfBasil}
                    </Typography>
                    </Grid>
                    <Grid item style={{ margin: "1rem" }}>
                    <Button
                        className={classes.order}
                        variant="outlined"
                        component={Link}
                        to={`/productOverview/${product.id}`}
                    >
                        Learn Now{" "}
                        <ArrowForwardIcon style={{ marginLeft: "0.3rem" }} />
                    </Button>
                    <Button
                        className={classes.learn}
                        variant="outlined"
                        component={Link}
                        to="/contact"
                    >
                        Order Now{" "}
                        <ShoppingCartIcon style={{ marginLeft: "0.3rem" }} />
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
            </CardContent>
            </Card>
        </Grid>
    </Fragment>
  );
};
export default ProductOverview