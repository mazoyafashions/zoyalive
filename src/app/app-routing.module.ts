import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component'
import { AddToCartComponent } from './product/add-to-cart/add-to-cart.component';
import {GoogleMapComponent} from './google-map/google-map.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent

  },
  {
    path: 'about',
    component:AboutComponent

  },
  {
    path: 'about',
    component:AboutComponent

  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'add-to-cart',
    component:AddToCartComponent

  },
  {
    path: 'google-map',
    component:GoogleMapComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
