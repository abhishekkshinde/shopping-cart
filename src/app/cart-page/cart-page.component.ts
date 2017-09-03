import { Component, OnInit, EventEmitter } from '@angular/core';
import { ItemService } from './../services/item.service';
import { CartService } from './../services/cart.service';
import { Cart } from './../models/cart-model';
import { CartItem } from './../models/cart-item';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  itemID : string = "";
  cart: Cart;
  constructor(public itemService: ItemService, public cartService: CartService) { 
    this.cart = new Cart();
    this.cart = this.cartService.createCart(this.cart);
    console.log(this.cart);
  }
  
  ngOnInit() {
  }

  addItem(){
    console.log('add item code here');
    let itemFound = false;
    for(let itemInSample of this.itemService.sampleItems){
      if(itemInSample.itemID == this.itemID){
        let newCartItem = new CartItem();
        newCartItem.item = itemInSample;
        newCartItem.itemQty = 1;
        this.cart.cartLines.push(newCartItem);
      }
    }
    this.cartService.saveCartInSession(this.cart);
  }
  remove(i){
    this.cart.cartLines.splice(i,1);
    this.cartService.saveCartInSession(this.cart);
  }
}
