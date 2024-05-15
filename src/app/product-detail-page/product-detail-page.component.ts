import { ProductService } from './../services/product.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
@Input()

  product!: Product;

private router = inject(Router);

private ProductService = inject(ProductService);


onEdit(): void {
  this.router.navigate(['product', 'form', this.product.id]);
}

onRemove():void{
  this.ProductService.remove(this.product.id).subscribe(() => this.router.navigate(['products']));
}

onBack():void{
  this.router.navigate(['products']);
}
}
