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
  
  if (!product) {
    return <div>Product not found</div>;
  }

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
    </div>
  );
};

export default Product;
