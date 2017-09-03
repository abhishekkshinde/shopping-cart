import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ItemService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
