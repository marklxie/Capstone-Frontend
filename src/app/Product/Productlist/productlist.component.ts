import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(
    private productsvc: ProductService
  ) { }
  
    products: Product[];
    keys: string[] = Object.getOwnPropertyNames(new Product);
    searchcriteria: string = "";

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => {console.log(res), this.products = res;},
      err => {console.error(err)}
    )

  }

}
