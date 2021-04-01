import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { JoinedProducts } from 'src/app/models/joinedProducts';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  joinedProducts: JoinedProducts[] = [];
  filterText = '';
  dataLoaded = false;
  /*
  Angular-da bir servizi componentde istifade etmek ucun onun using-ni(import)
  elave edib, consturctora inject etmek lazimdir.
  */
  constructor(
    private productService: ProductService,
    private activadedRoute: ActivatedRoute,
    private toastService: ToastrService,
    private cartService: CartService
  ) {}

  //Products sehifede acilarken ilk dom terefinden ilk calistirilan metod. Formun load eventi kimi.
  ngOnInit(): void {
    this.activadedRoute.params.subscribe((params) => {
      //Params-in icerisinde olan string routingde qeyd olundugu kimi yazilmalidir. LetterSensetive
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else if (params['productId']) {
        this.getProductByid(params['productId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }

  addToCart(product: Product) {
    if (product.productId === 1) {
      this.toastService.error('Xeta! Elave edile bilmez', product.productName);
    } else {
      this.toastService.success('Əlavə edildi', product.productName);
      this.cartService.addToCart(product);
    }
  }

  getProductByid(productId: number) {
    this.productService
      .getProductById(productId)
      .subscribe((response) => (this.product = response.data));
  }
}
