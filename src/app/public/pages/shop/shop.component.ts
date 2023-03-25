import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: any = [];

  products!: Product[];
  constructor(private productService: ProductService, private router: Router, private cartService: CartService, private categoriesService: CategoriesService) {

  }


  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = this.categoriesService.getCategories()
  }

  filterByCategory(category: string) {
    if (category == 'all') {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsByCategory(category);
    }
  }

  // addToCart(p: Product): void {
  //   // console.log(p)
  //   this.cartService.add(p);
  //   // this.router.navigate(['/cart']);
  // }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

}
