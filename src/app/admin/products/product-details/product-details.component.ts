import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router
    // , private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const result = this.productService.getProductById(id);
    if (result != null) {
      this.product = result;
    } else {
      // this.toastr.error('Produit introuvable');
      this.router.navigate(['/admin/products']);
    }
  }
}
