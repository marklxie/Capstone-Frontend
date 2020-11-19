import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/product.class';
import { ProductService } from 'src/app/Product/product.service';
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
    private router: Router
  ) { }

  requestline:Requestline = new Requestline;
  products: Product[] = [];

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
      },
      err => {
        console.error(err);
      }
    )
  }
}
