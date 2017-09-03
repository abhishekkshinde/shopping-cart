import { Component, OnInit, EventEmitter } from '@angular/core';
import { ItemService } from './../services/item.service';
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
  constructor(public itemService: ItemService) { 
    this.cart = new Cart();
    this.cart.cartLines[0] = new CartItem();
    this.cart.cartLines[0].item = this.itemService.sampleItems[0];
    this.cart.cartLines[0].itemQty = 2;
    this.cart.cartLines[1] = new CartItem();
    this.cart.cartLines[1].item = this.itemService.sampleItems[1];
    this.cart.cartLines[1].itemQty = 3;

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
  }
  remove(i){
    this.cart.cartLines.splice(i,1);
  }
}
