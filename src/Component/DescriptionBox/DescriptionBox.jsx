import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is like a digital storefront. It's a platform
          where you can buy and sell products or services online. Think of it as
          a virtual shopping mall where you can browse through different stores,
          add items to your cart, and make purchases with just a few clicks.
        </p>
        <p>
                  Product Catalog: Displays a variety of products with descriptions,
                  images, and pricing. <br/>
                  Shopping Cart: Allows customers to add items to
                  their virtual shopping cart.
                  <br/>
                  Checkout Process: Facilitates secure
                  payment options and order processing. <br/>
                  Search Functionality: Helps
                  customers find specific products or categories. <br/>
                  Customer Account:Enables customers to create profiles, manage orders, and save their information.
        </p>
        
      </div>
    </div>
  );
}

export default DescriptionBox
