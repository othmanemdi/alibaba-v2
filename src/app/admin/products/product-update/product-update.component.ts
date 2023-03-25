import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  product!: Product;
  categories: any = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router
    , private toastr: ToastrService,
    private categoriesService: CategoriesService
  ) { }

  // private toastr: ToastrService,
  // this.toastr.success('Hello world!');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const result = this.productService.getProductById(id);
    if (result != null) {
      this.product = result;
    } else {
      this.toastr.error('Produit introuvable');
      this.router.navigate(['/admin/products']);
    }

    this.categories = this.categoriesService.getCategories()

  }

  saveProduct(): void {
    this.productService.updateProduct(this.product);
    this.toastr.success('Bien modifier');
    this.router.navigate(['/admin/products']);
  }
}
