import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {

  vendors: Vendor[];
  keys: String[] = Object.getOwnPropertyNames(new Vendor());
  searchcriteria: string = "";
  constructor(
    private vendorsvc: VendorService,
  ) { }
  
  ngOnInit(): void {
    console.log(this.keys);
    this.vendorsvc.list().subscribe(
      res => { 
        console.log(res);
        this.vendors = res;},
      err => {console.error(err)}
    )
    console.log(this.keys);
  }

}
