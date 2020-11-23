import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRequest } from './request.class';


const baseurl:string = "http://localhost:61172/api/requests";
@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(
    private http: HttpClient
  ) { }

  requests: PRequest[];
  
  list():Observable<PRequest[]>{
    return this.http.get(`${baseurl}`) as Observable<PRequest[]>;
  }


  getRequest(num: number): Observable<PRequest>{
    return this.http.get(`${baseurl}/${num}`) as Observable<PRequest>;
  }

  change(request: PRequest): Observable<any>{
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<PRequest>;
  }

  create(request: PRequest): Observable<any>{
    return this.http.post(`${baseurl}`, request) as Observable<any>;
  }

  delete(num: number): Observable<PRequest>{
    return this.http.delete(`${baseurl}/${num}`) as Observable<PRequest>;
  }

  rejectRequest(request: PRequest): Observable<any>{
    return this.http.put(`${baseurl}/reject/${request.id}`, request) as Observable<any>;
  }

  approveRequest(request: PRequest): Observable<any>{
    return this.http.put(`${baseurl}/approve/${request.id}`, request) as Observable<any>;
  }

  reviewRequest(request: PRequest): Observable<any>{
    return this.http.put(`${baseurl}/review/${request.id}`, request) as Observable<any>;
  }

  listReview(userId: number): Observable<PRequest[]>{
    return this.http.get(`${baseurl}/review/${userId}`) as Observable<PRequest[]>;
  }
  
}

