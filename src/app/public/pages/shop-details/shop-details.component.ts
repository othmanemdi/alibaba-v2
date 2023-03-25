import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  productDetails!: Product | null;
  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.params['id']);
    this.productDetails = this.productService.getProductById(id)
    if (this.productDetails == null) {
      console.log("Error")
      this.router.navigateByUrl('shop');
    }
  }
}
