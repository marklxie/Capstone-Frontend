import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { SystemService } from '../core/system.service';
import { User } from '../User/user.class';
import { Menu } from './menu.class';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 

  constructor(
    private system:SystemService
  ) {} 

  menu: Menu[] = [];
  user: User = null;

  ngOnInit(): void {
    this.system.user.subscribe(
      res => {this.user = res;},
      err => {console.log(err)}
    )
    let home: Menu = {display:"Home", route:"/home", needsAdmin:false, needsReviewer:false};
    let about: Menu = {display:"About", route:"/about", needsAdmin:false, needsReviewer:false};
    let user: Menu = {display:"Users", route:"/users/list", needsAdmin:false, needsReviewer:false};
    let product: Menu = {display:"Products", route:"/products/list", needsAdmin:false, needsReviewer:false};
    let vendor: Menu = {display:"Vendors", route:"/vendors/list", needsAdmin:false, needsReviewer:false};
    let request: Menu = {display:"Requests", route:"/requests/list", needsAdmin:false, needsReviewer:false};
    let review: Menu = {display:"Review", route:"requests/reviewlist", needsAdmin:false, needsReviewer:true};
    this.menu.push(home, about, user, product, vendor, request, review);
  };
  
  logout():void{
    this.system.logout();
  }


}
