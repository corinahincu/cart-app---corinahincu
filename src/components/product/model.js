import { Money } from "../money/model";

export class Product {
  constructor({id, name, image, price:{amount,currency}}) {
    this.id = id;
    this.name = name;
    this.image = image;
    /* this.money = new Money(price.amount, price.currency); */
    this.price = new Money(amount,currency);
  }
}
