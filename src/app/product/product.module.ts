import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'product',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component:ProductListComponent

  },
  {
    path: 'product-details',
    component: ProductDetailsComponent

  }
];

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, CarouselComponent, AddToCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductModule { }
