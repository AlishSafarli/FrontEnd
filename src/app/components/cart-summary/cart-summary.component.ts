import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  product: Product;
  constructor(
    private cardService: CartService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cardService.getCartItems();
  }

  removeFromCart(product: Product) {
    this.cardService.deleteFromCart(product);
    this.toastService.warning(product.productName + ' silindi');
  }
  getProductById() {}
}
