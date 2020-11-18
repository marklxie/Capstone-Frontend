import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Vendor/vendor.class';
import { VendorService } from 'src/app/Vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  product: Product;
  vendors: Vendor[];

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.getProduct(id).subscribe(
      res => {
        console.debug(res);
        this.product = res;
      },
      err =>{
        console.error(err);
      }
    );
    this.vendorsvc.list().subscribe(
      res => { 
        console.log(res);
        this.vendors = res;},
      err => {console.error(err)}
    );
  }

  save():void{
    this.productsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Changed:",res);
        this.router.navigateByUrl("products/list");
     },
     err => {console.error(err)}
    )
  }

  check():void{
    console.log(this.product);
  }
  back():void{
    this.router.navigateByUrl("/products/list");
  }


}
