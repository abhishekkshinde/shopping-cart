import { Injectable } from '@angular/core';
import { Cart } from './../models/cart-model';
import { CartItem } from './../models/cart-item';
import { ItemService } from './item.service';
@Injectable()
export class CartService {

  constructor(public itemService: ItemService) { }

  createCart(cart: Cart){
    cart.cartLines[0] = new CartItem();
    cart.cartLines[0].item = this.itemService.sampleItems[0];
    cart.cartLines[0].itemQty = 2;
    cart.cartLines[1] = new CartItem();
    cart.cartLines[1].item = this.itemService.sampleItems[1];
    cart.cartLines[1].itemQty = 3;

  }
  removeItem(i, cart: Cart){
    cart.cartLines.splice(i);
  }
}
