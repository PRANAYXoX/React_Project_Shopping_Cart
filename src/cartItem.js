import React from "react";

function Cartitem(props) {
  const { product, increaseQty, decreaseQty, deleteItem } = props;
  return (
    <div className="container card item-wrapper py-2 m-4 " data-id={product.id}>
      <div className="row d-flex  px-2 item-detail">
        <div className="col-5 item-image">
          <img src={product.img} alt="item image" />
        </div>
        <div className="col-7 item-description p-0">
          <div className="container-fluid">
            <div className="row i-title bg-dark text-warning justify-content-center py-2">
              TITLE: {product.title}
            </div>
            <div className="row i-price bg-dark text-warning justify-content-center py-2">
              PRICE: {product.price}
            </div>
            <div className="row i-qty bg-dark text-warning justify-content-center py-2">
              QUANTITY: {product.qty}
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex item-action justify-content-around mt-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/929/929409.png"
          onClick={() => increaseQty(props.product)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/753/753340.png"
          onClick={() => decreaseQty(props.product)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/216/216658.png"
          onClick={() => props.deleteItem(props.product.key)}
        />
      </div>
    </div>
  );
}
export default Cartitem;
