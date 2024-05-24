import { Injectable, inject } from '@angular/core';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductRemoteService extends ProductService{
private readonly url = 'http://localhost:3000/products';

private readonly httpClient = inject(HttpClient);

override getById(productId: number): Observable<Product> {
  return this.httpClient.get<Product>(`${this.url}/${productId}`);
}

  override getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);

  }

  override add(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, { ...product });
  }
}
