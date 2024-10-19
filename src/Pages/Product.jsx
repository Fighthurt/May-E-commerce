<<<<<<< HEAD
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

  const product = all_product.find((e) => e.id === Number(productId));

=======
import { useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { product_id } = useParams(); // Ensure this matches your route parameter
  const location = useLocation();
  
  // Fetch the product either from location.state or find it in the context
  const product = location.state || all_product.find(e => e.id === Number(product_id));
  
>>>>>>> 9fcc9e2ada106d427e280622e80c8ee7f20c5167
  if (!product) {
    return <div>Product not found</div>;
  }

<<<<<<< HEAD
  return (
    <div>
      {/* Pass the product to Breadcrumbs and ProductDisplay */}
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
=======
  const { id, image, name, new_price, old_price } = product;

  return (
    <div>
      {/* Pass product data as props to ProductDisplay */}
      <ProductDisplay
        id={id}
        image={image}
        name={name}
        new_price={new_price}
        old_price={old_price}
      />
>>>>>>> 9fcc9e2ada106d427e280622e80c8ee7f20c5167
    </div>
  );
};

export default Product;
