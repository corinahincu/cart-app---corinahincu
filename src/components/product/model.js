import {Money} from '../money/model'

export class Product {
  constructor({ name, image, price }) {
    this.name = name;
    this.image = image;
    this.money = new Money(price);
  }
}



