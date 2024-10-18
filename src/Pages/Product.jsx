import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Component/Breadcrums/Breadcrums";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";

const Product = () => {
  // Access the context
  const { all_product } = useContext(ShopContext);

  // Get the productId from the URL (Note the correct casing: productId)
  const { productId } = useParams();

  // Find the product by matching productId (ensure productId is compared as a number if IDs are numeric)
  const product = all_product.find((e) => e.id === Number(productId));

  // Check if the product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Pass the product to Breadcrumbs and ProductDisplay */}
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
};

export default Product;
