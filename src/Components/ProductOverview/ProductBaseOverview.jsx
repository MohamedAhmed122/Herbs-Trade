import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyle from "./Styles";
import ProductOverview from "./ProductOverview";

const ProductBaseOverview = ({ products }) => {
  const classes = useStyle();
  return (
    <Fragment>
        <Grid
            container
            style={{ height: "45em", marginBottom: "8rem" }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
        >
            <Grid item>
            <Typography className={classes.info} variant="h3">
                <span
                style={{
                    color: "#FFEB3B",
                    fontFamily: "Pacifico",
                    fontSize: "5rem",
                    marginRight: "0.7rem",
                }}
                >
                {products.number}
                </span>
                {products.category}
            </Typography>
            </Grid>
        </Grid>
        <Grid container justify="space-around" style={{ marginBottom: "4rem" }}>
            {products.products.map((product) => (
            <ProductOverview product={product} key={product.id} />
            ))}
        </Grid>
    </Fragment>
  );
};
export default ProductBaseOverview;
