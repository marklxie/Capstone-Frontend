import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/product.class';
import { ProductService } from 'src/app/Product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  constructor(
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  requestline: Requestline = new Requestline;
  products: Product[] = [];
  

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    )

    this.requestline.requestId = id;
  }
  
  create():void{
    console.log(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    )
    this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`)
  }

}
