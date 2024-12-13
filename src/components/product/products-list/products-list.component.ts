import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  url = 'http://localhost:3000/articles';

  produits = inject(ActivatedRoute).data.pipe(map(({ products }) => products));
  private http: HttpClient = inject(HttpClient);
}
