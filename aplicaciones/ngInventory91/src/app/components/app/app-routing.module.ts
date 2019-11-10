import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1Component } from '../inventory/app1/app1.component';
import { ProductsListComponent } from '../inventory/products-list/products-list.component';
import { PriceDisplayComponent } from '../inventory/price-display/price-display.component';
import { ProductDepartmentComponent } from '../inventory/product-department/product-department.component';
import { ProductImageComponent } from '../inventory/product-image/product-image.component';
import { ProductRowComponent } from '../inventory/product-row/product-row.component';


const routes: Routes = [
  {path:'inventario',component:App1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ App1Component,
                                  ProductsListComponent,
                                  PriceDisplayComponent,
                                  ProductDepartmentComponent,
                                  ProductImageComponent,
                                  ProductRowComponent
                                ] // si falta uno, no sale nada