import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, image, name, new_price, old_price } = props;
  // console.log("item", id, image, name, new_price, old_price, props)
  // console.log("Item props:", props);
  // console.log("Item component props:", { id, image, name, new_price, old_price });


  return (
    <div className="item">
      <Link
        to={{
          pathname: `/product/${id}`,
          state: {
            id,
            image,
            name,
            new_price,
            old_price,
          },
        }}
      >
        <img src={image} alt={name} />
      </Link>
      <h2>{name}</h2>
      <p>New Price: ${new_price}</p>
      <p>Old Price: ${old_price}</p>
    </div>
  );
};

export default Item;
