import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { CategoryPickerComponent } from './controls/category-picker/category-picker.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    CategoryPickerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
