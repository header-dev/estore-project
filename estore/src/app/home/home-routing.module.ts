import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
