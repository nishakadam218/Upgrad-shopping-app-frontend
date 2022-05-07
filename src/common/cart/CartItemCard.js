import React from 'react'
import { Link } from 'react-router-dom';

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
      <div className="CartItemCard">
        <img src={item.imageUrl} alt="cart-product" />
        <div>
          <Link to={`/product/${item.product}`}>{item.name.substring(0, 50)+`...`}</Link>
          <span>{`Price: ₹${item.price}`}</span>
          <p onClick={() => deleteCartItems(item.product)}>Remove</p>
        </div>
      </div>
    );
  };

export default CartItemCard