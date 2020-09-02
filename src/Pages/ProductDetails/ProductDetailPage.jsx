import React from "react";
import { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Products from "../../API/ProductsAPI";
import Header from "../../Components/ProductDetials/Header/Header";
import Info from "../../Components/ProductDetials/info/Info";

const ProductDetailPage = ({ match }) => {
  const ProductsDetail = Products.find(
    (Product) => Product.id === match.params.id
  );

  return (
    <Fragment>
        <Grid container>
            <Grid item lg={3}></Grid>
            <Grid item lg={6}>
            <Header Product={ProductsDetail} />
            <Info Product={ProductsDetail} />
            </Grid>
            <Grid item lg={3}></Grid>
        </Grid>
    </Fragment>
  );
};

export default ProductDetailPage;
