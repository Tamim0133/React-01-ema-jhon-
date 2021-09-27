import React from "react";

const Cart = (props) => {
  let total = 0;
  props.items.map((item) => (total = total + item.price));
  return (
    <div>
      <h4>Order Summary </h4>
      <h6>Items Ordered :{props.items.length} </h6>

      <h3>Total : {total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
