import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  /*
  Angular-da bir servizi componentde istifade etmek ucun onun using-ni(import)
  elave edib, consturctora inject etmek lazimdir.
  */
  constructor(
    private productService: ProductService,
    private activadedRoute: ActivatedRoute
  ) {}

  //Products sehifede acilarken ilk dom terefinden ilk calistirilan metod. Formun load eventi kimi.
  ngOnInit(): void {
    this.activadedRoute.params.subscribe((params) => {
      //Params-in icerisinde olan string routingde qeyd olundugu kimi yazilmalidir. LetterSensetive
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.products;
      }
    });
    this.getProducts();
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
}
