import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { product_id } = useParams();
  const product = all_product.find((e) =>e.id === Number(product_id) )
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product = {product} />
    </div> 
  )
}

export default Product
