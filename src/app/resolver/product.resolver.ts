import { inject } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ResolveFn } from '@angular/router';
import { Product } from '../model/product';

export const productResolver: ResolveFn<Product> = (route, state, productService = inject(ProductService)) => {
  const id = +route.paramMap.get('id')!;
return productService.getById(id);
};
