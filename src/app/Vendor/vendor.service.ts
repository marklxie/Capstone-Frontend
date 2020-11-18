import { Injectable } from '@angular/core';
import { Vendor } from './vendor.class';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:61172/api/vendors";
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  

  vendors: Vendor[];
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]>{
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }

  getVendor(num: number): Observable<Vendor>{
    return this.http.get(`${baseurl}/${num}`) as Observable<Vendor>;
  }

  change(vendor: Vendor): Observable<any>{
    return this.http.put(`${baseurl}/${vendor.id}`, Vendor) as Observable<Vendor>;
  }

  create(vendor:Vendor): Observable<any>{
    return this.http.post(`${baseurl}`, vendor) as Observable<any>;
  }

  delete(num: number): Observable<Vendor>{
    return this.http.delete(`${baseurl}/${num}`) as Observable<Vendor>;
  }
}
