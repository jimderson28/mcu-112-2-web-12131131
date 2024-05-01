import { Component } from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './model/product';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
