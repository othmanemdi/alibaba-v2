import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  newProduct: Product = new Product(0, '', '', 0, '');

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit(): void {
    this.productService.addProduct(this.newProduct);
  }

  saveProduct(): void {
    console.log(this.newProduct)
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['/admin/products']);
  }

  cancel(): void {
    this.router.navigate(['/admin/products']);
  }
}
