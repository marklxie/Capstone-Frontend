import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/User/user.class';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private system: SystemService
  ) { }

  vendor: Vendor;
  buttonHide: boolean = false;
  loggedUser:User;
  
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
    this.system.user.subscribe(
      res => {this.loggedUser = res;},
      err => {console.error(err);}
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
