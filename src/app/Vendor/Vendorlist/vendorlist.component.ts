import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {


  constructor(
    private vendorsvc: VendorService,
  ) { }

  vendors: Vendor[];
  keys: String[] = Object.getOwnPropertyNames(new Vendor());
  searchcriteria: string = "";
  asc: boolean = true;
  sortcriteria: string = "id";
  
  ngOnInit(): void {
    console.log(this.keys);
    this.vendorsvc.list().subscribe(
      res => { 
        console.log(res);
        this.vendors = res;},
      err => {console.error(err)}
    )
  }

  changeSort(column: string):void{
    if(column == this.sortcriteria){
      this.asc = !this.asc;
      return;
    }
    this.sortcriteria = column;
    this.asc = true;
  }
}
