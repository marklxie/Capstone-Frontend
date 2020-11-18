import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  
  constructor(
    private vendorsvc:VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  vendor: Vendor;

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.getVendor(id).subscribe(
      res => {
        console.debug(res);
        this.vendor = res;
        
      },
      err =>{
        console.error(err);
      }
    )
  }

  save():void{
    this.vendorsvc.change(this.vendor).subscribe(
      res => {
        console.debug("Vendor Changed:",res);
        this.router.navigateByUrl("vendors/list");
     },
     err => {console.error(err)}
    )
  }
  back():void{
    this.router.navigateByUrl("/vendors/list");
  }

}
