import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsComponent } from './public/pages/shop-details/shop-details.component';
import { CartComponent } from './public/pages/cart/cart.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ShopComponent } from './public/pages/shop/shop.component';
import { PublicComponent } from './public/public.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesListComponent } from './admin/categories/categories-list/categories-list.component';
import { ProductCreateComponent } from './admin/products/product-create/product-create.component';
import { ProductUpdateComponent } from './admin/products/product-update/product-update.component';
import { ProductDetailsComponent } from './admin/products/product-details/product-details.component';

const routes: Routes = [
    {
        path: '', component: PublicComponent, children: [
            // { path: '', component: LoginComponent },
            // { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '', component: HomeComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'shop-details/:id', component: ShopDetailsComponent },
            { path: 'cart', component: CartComponent },
        ]
    },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', component: ProductDetailsComponent },
            { path: 'products-create', component: ProductCreateComponent },
            { path: 'products/:id/update', component: ProductUpdateComponent },
            { path: 'categories', component: CategoriesListComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }