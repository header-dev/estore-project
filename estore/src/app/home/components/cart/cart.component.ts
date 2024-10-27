import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { Router } from '@angular/router';
import { CartItem } from '../../types/cart.type';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  faTrash = faTrash;

  constructor(public cartStore: CartStoreItem, private router: Router) {}

  navigateToHome():void {
    this.router.navigate(['home/products'])
  }

  updateQuantity($event:any, cartItem: CartItem) :void {
      if ($event.target.innerText === '+') {
        this.cartStore.addProduct(cartItem.product);
      } else if ($event.target.innerText === '-') {
        this.cartStore.descreaseProductQuantity(cartItem);
      }
  }

  removeItem(cartItem: CartItem):void {
    this.cartStore.removeProduct(cartItem);
  }

  

}
