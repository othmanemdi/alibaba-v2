import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories = [
    { id: 1, icon: "phone", name: "iphone" },
    { id: 2, icon: "tablet", name: "ipad" },
    { id: 3, icon: "laptop", name: "macbook" },
    { id: 4, icon: "display", name: "imac" },
    { id: 5, icon: "smartwatch", name: "Apple Watch" },
  ]

  constructor() {
    this.categories = this.getCategories()
  }

  getCategories() {
    return this.categories;
  }
}
