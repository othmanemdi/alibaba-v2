import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from './body/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';

@NgModule({
  declarations: [
    PublicComponent,
    NavComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    ShopDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PublicModule { }
