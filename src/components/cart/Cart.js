import React from "react";
import { getCartItems } from "./api";
import { Product } from "../product/ui";
import { CartItem } from "./ui";
import { Money } from "../money/ui";
import { Quantity } from "../quantity/ui";


export const Cart = () => {
  const listItems = getCartItems()

  return (
    <div className="cart-container">
      {listItems.map(
        ({
          product: { id, name, image, price },
          quantity,
          cost: { amount, currency },
        }) => (
          <CartItem key={id}>
            <div className="cart-item-row">
              <Product name={name} image={image} price={price} />
              <Quantity quantity={quantity} />
              <Money cost={amount} currency={currency} />
            </div>
          </CartItem>
        )
      )}
    </div>
  );
}

/* export const Cart = () => {
  const listItems = getCartItems();

  return (
    <div className="cart-container">
      {listItems.map((el) => (
        <CartItem key={el.product.id} >
          <div className="cart-item-row">
            <Product
              name={el.product.name}
              image={el.product.image}
              price={el.product.price}
            ></Product>
            <Quantity  quantity={el.quantity} />
            <Money
              cost={el.cost.amount}
              currency={el.cost.currency}
            />
          </div>
        </CartItem>
      ))}
    </div>
  );
}; */
