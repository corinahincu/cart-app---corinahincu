
import { CartItem } from "./model";
import { items } from "./cartItems";


export function getCartItems() {
  return items.map( item => {
    return new CartItem(item)
  })
}

console.log(items);

