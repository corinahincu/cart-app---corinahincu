
import { CartItem } from "./components/cart/model";
import { items } from "./cartItems";


export function getCartItem() {
  return items.map( item => {
    return new CartItem(item)
  })
};



