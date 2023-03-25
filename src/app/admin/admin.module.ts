import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavComponent } from './body/nav/nav.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    NavComponent,
    CategoriesListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ]
})
export class AdminModule { }
