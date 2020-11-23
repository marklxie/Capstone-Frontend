import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/product.class';
import { ProductService } from 'src/app/Product/product.service';
import { PRequest } from 'src/app/Request/request.class';
import { RequestService } from 'src/app/Request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  constructor(
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService
  ) { }

  requestline:Requestline = new Requestline;
  products: Product[] = [];
  request: PRequest;

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestlinesvc.getRequestline(id).subscribe(
      res => {
        console.log(res);
        this.requestline = res;
      },
      err =>{
        console.error(err)
      }
    )
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  back():void{
    this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
  }

  save():void{
    this.requestlinesvc.change(this.requestline).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
        this.refresh();
      },
      err => {
        console.error(err);
      }
    )

  }

  refresh(): void{
    this.requestsvc.getRequest(this.requestline.requestId).subscribe(
      res =>{console.debug(res); this.request = res;},
      err =>{ console.error(err);}
    )
  }

}
