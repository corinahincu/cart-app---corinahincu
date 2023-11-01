import {Money} from '../money/model'
import { Product } from "../product/model"

export class CartItem {
  constructor(product) {
    this.product = new Product(product);
    this.quantity = product.quantity;
    this.cost = new Money({
      amount: product.price.amount * product.quantity,
      currency: product.price.currency,
    });
  }
}
/* export class CartItem {
  constructor({ product, quantity}) {
    this.product = new Product(product);
    this.quantity = quantity;
    this.cost = new Money({
      amount: product.price.amount * quantity,
      currency: product.currency,
    });
  }
} */
/* export class CartItem {
  constructor({product,price:{amount,currency}, quantity}) {
    this.product = new Product(product);
    this.quantity = quantity
    this.cost = new Money({
      amount: amount * quantity,
      currency: currency,
    })
  }
} */
// nu arata imaginea, si am eroare in consola , why?
/* export class CartItem {
  constructor({ price: { amount, currency }, quantity }) {
    this.product = Product;
    this.quantity = quantity;
    this.cost = new Money({
      amount: amount * quantity,
      currency: currency,
    });
  }
} */


