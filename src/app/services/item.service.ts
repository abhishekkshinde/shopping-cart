import { Injectable } from '@angular/core';
import { Item } from './../models/item.model'

@Injectable()
export class ItemService {

  sampleItems: any;
  constructor() {
    this.sampleItems = [];
    for (let i = 0; i < 5; i++) {
      let item1 = new Item;
      item1.itemID = "ItemID" + i;
      item1.itemPrice = 300 + 1 * 50;
      item1.itemImage = "/assets/tsconfig.jpg";
      item1.itemDesciption = "This is the descrption for item " + i;
      this.sampleItems.push(item1);
    }
  }


}
