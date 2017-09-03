import { CartItem } from './cart-item';
export class Cart {
    cartNo: string;
    cartLines: CartItem[];
    constructor() {
        this.cartNo = "1234";
        this.cartLines = [];
    }
}