import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:61172/api/products"
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

  getProduct(num: number): Observable<Product>{
    return this.http.get(`${baseurl}/${num}`) as Observable<Product>;
  }

  change(product: Product): Observable<any>{
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }

  create(product: Product): Observable<any>{
    return this.http.post(`${baseurl}`, product) as Observable<any>;
  }

  delete(num: number): Observable<Product>{
    return this.http.delete(`${baseurl}/${num}`) as Observable<Product>;
  }

}
