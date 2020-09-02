import React, { Fragment } from "react";
import Product from "../../API/MainAPI";
import ProductBaseOverview from "../../Components/ProductOverview/ProductBaseOverview";

const ProductOverviewPage = ({ match }) => {

    const products = Product.find((e) => e.route === match.params.id)
  return <Fragment>
      <ProductBaseOverview products={products} />
  </Fragment>;
};
export default ProductOverviewPage;
