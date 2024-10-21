import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Component/Breadcrums/Breadcrums";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Component/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product with the matching productId
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Pass the product to all components that need it */}
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      {/* Pass the product description and reviews to DescriptionBox */}
      <DescriptionBox
        description={product.description}
        reviews={product.reviews}
      />
      {/* You can also pass product data to RelatedProducts if needed */}
      <RelatedProducts productId={product.id} />
    </div>
  );
};

export default Product;
