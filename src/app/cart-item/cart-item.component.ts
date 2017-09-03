import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from './../models/cart-item';
import { CartService } from './../services/cart.service';
import { Cart } from './../models/cart-model';
@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  
  constructor(public cartService: CartService) { 
    console.log(this.cartItem);
  }
  
  ngOnInit() {
  }

  increaseQty(){
    this.cartItem.itemQty++;
  }

  decreaseQty(){
    this.cartItem.itemQty--;
  }
}
