import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:61172/api/products/"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(
   private http: HttpClient
  ) { }

  list():Observable<Product[]>{
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }
}
