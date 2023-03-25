import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products!: Product[];

  constructor() {
    this.products = this.getProducts()
  }
  private products: Product[] = [
    { id: 1, name: 'Produit 1', description: 'Description produit 1', price: 20, category: "iphone" },
    { id: 2, name: 'Produit 2', description: 'Description produit 2', price: 20, category: "ipad" },
    { id: 3, name: 'Produit 3', description: 'Description produit 3', price: 30, category: "iphone" },
    { id: 4, name: 'Produit 4', description: 'Description produit 4', price: 40, category: "ipad" },
    { id: 5, name: 'Produit 5', description: 'Description produit 5', price: 50, category: "iphone" },
    { id: 6, name: 'Produit 6', description: 'Description produit 6', price: 60, category: "ipad" },
  ];
  // sum: number = 0;

  // constructor() {
  //   // this.products.forEach(p => {
  //   //   this.sum += p.price;
  //   // });
  //   // console.log(this.sum)
  // }

  // Get all data
  getProducts() {
    return this.products;

    // let products = localStorage.getItem('products');
    // if (products) {
    //   return this.products = JSON.parse(products);
    // }

  }

  getProductById(id: number): Product | null {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      return null;
    }
    return product;
  }

  // Add new data
  addProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  // Update existing data
  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
  }

  // Delete data
  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  }

  // Search data
  searchProducts(searchTerm: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
    // let product;
    // this.products.forEach(p => { if (p.category === category) { product = p; } })
    // if (product) {
    //   console.log(product)
    //   this.productDetails = product;
    // }
    // else {
    //   console.log("Error")
    //   this.router.navigateByUrl('shop');
    // }
  }
}
