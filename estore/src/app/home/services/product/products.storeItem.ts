import { Product } from './../../types/products.type';
import { StoreItem } from './../../../shared/storeItem';
import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsStoreItem extends StoreItem<Product[]> {
  constructor(private productsService: ProductsService) {
    super([]);
  }

  async loadProducts(query?: string) {
    this.productsService.getAllProducts(query).subscribe((products) => {
      this.setState(products);
    });
  }

  get products$(): Observable<Product[]> {
    return this.state$;
  }

  get products(): Product[] {
    return this.state;
  }
}
