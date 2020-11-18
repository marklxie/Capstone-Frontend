import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor;

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createNew():any{
    return this.vendorsvc.create(this.vendor).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/vendors/list");
       },
      err => {console.error(err)}
    )
  }

  back():void{
   this.router.navigateByUrl("/vendors/list");
 }
  check():void{
    console.log(this.vendor);
  }
}
