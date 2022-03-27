import React from "react";
import Cartitem from "./cartItem";
function Cart(props) {
  const { product, key, increaseQty, decreaseQty, deleteItem } = props;
  return (
    <div className="container cart d-flex my-4">
      {product.map((item) => (
        <Cartitem
          product={item}
          key={item.key}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default Cart;
