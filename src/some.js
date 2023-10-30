import React from "react";


// Product component
export function Product({ name, image, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Money amount={price.amount} currency={price.currency} />
    </div>
  );
}

// Money component
export function Money({ amount, currency }) {
  return (
    <span className="money">
      {amount.toFixed(2)} {currency}
    </span>
  );
}

// Quantity component
export function Quantity({ quantity }) {
  return (
    <div className="quantity">
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </div>
  );
}

// CartItem component
export function CartItem({ product, quantity, cost }) {
  return (
    <div className="cart-item">
      {product}{quantity}{cost}
      {/* <Product {...product} />
      <Quantity value={quantity} />
      <Money amount={cost.amount} currency={cost.currency} /> */}
    </div>
  );
}


