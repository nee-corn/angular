import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  body = {
    id: '',
    src: '',
    name: '',
    rating: '',
    price: '',
  };
}
