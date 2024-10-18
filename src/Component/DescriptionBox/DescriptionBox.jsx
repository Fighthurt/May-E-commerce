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
              <p></p>
      </div>
    </div>
  );
}

export default DescriptionBox
