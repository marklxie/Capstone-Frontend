import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Vendor/vendor.class';
import { VendorService } from 'src/app/Vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  product: Product = new Product;
  vendors: Vendor[];
  vendor: Vendor;
  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => { 
        console.log(res);
        this.vendors = res;},
      err => {console.error(err)}
    )
  }

  createNew():any{
    return this.productsvc.create(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/products/list");
       },
      err => {console.error(err)}
    )
  }

  back():void{
   this.router.navigateByUrl("/products/list");
 }
  check():void{
    console.log(this.product);
  }

}
