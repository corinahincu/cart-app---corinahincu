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
