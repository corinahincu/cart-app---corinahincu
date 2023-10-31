import React from "react";
import { getCartItem } from "./api";
/* import { Product, Money, Quantity, CartItem } from "./ui"; */
import { Product } from "../product/ui";
import { CartItem } from "./ui";
import { Money } from "../money/ui";
import { Quantity } from "../quantity/ui";


export const Cart = () => {
  const listItems = getCartItem();

  return (
    <div className="cart-container">
      {listItems.map((el) => (
        <CartItem key={el.product.id}>
          <Product
            name={el.product.name}
            image={el.product.image}
            price={el.product.price}
          >
          </Product>
          <Quantity quantity={el.quantity} />
          <Money
            cost={el.cost.amount}
            currency={el.cost.currency}
          />
        </CartItem>
      ))}
    </div>
  );
};
