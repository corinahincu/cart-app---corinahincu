import { items } from "./cartItems.js";
import {Quantity}  from "./quantity.js";
import "./App.css"

export const Cart = () => {
  const listItems = items.map((el) => (
    <div key={el.id} className="cart-item">
      <div className="cart-item-row">
        <div className="cart-item-image">
          <img src={el.image} alt={el.name} />
        </div>

          <div className="cart-item-quantity">
            <Quantity quantity={el.quantity} />
          </div>
          <div className="cart-item-price">
            {el.price.amount} {el.price.currency}
          </div>
        </div>
      </div>
  ));

  return <div className="cart-container">{listItems}</div>;
};

