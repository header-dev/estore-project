import { Injectable } from '@angular/core';
import { Product } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(query?: string): Observable<Product[]> {
    let url: string = `http://localhost:8000/api/products`;
    if (query) {
      url = `http://localhost:8000/api/products?${query}`;
    }
    return this.httpClient.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `http://localhost:8000/api/products/${id}`
    );
  }
}
