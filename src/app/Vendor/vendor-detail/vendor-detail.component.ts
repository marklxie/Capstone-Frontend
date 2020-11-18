import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor;
  buttonHide: boolean = false;
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.getVendor(id).subscribe(
      res =>{ 
        console.log(res);
         this.vendor= res;
        },
      err =>{ 
        console.log(err)
      }
    )
  }

  back():void{
    this.router.navigateByUrl("/vendors/list");
  }

  hide():void{
    this.buttonHide = !this.buttonHide;
  }

  delete(): void{
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.delete(id).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/vendors/list");
      },
      err =>{
        console.error(err);
      }
    )

  }
}
