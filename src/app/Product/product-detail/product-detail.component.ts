import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/User/user.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private system: SystemService
  ) { }

  product: Product;
  buttonHide: boolean = false;
  loggedUser: User;

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.getProduct(id).subscribe(
      res =>{ 
        console.log(res);
        this.product= res;
        },
      err =>{ 
        console.log(err)
      }
    )
    this.system.user.subscribe(
      res => {this.loggedUser = res;},
      err => {console.error(err);}
    )
  }

  back():void{
    this.router.navigateByUrl("/products/list");
  }

  hide():void{
    this.buttonHide = !this.buttonHide;
  }

  delete(): void{
    let id = +this.route.snapshot.params.id;
    this.productsvc.delete(id).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/products/list");
      },
      err =>{
        console.error(err);
      })}

}
