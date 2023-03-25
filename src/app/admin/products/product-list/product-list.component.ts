import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Product[];
  searchTerm: string = '';

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  search(): void {
    this.products = this.productService.searchProducts(this.searchTerm);
  }

  deleteProduct(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit?')) {
      this.productService.deleteProduct(id);
      this.products = this.productService.getProducts();
    }
  }
}
