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

  override getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);

  }
}
