import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { SystemService } from '../core/system.service';
import { Menu } from './menu.class';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [];

  constructor(
    private system:SystemService
  ) { } 

  ngOnInit(): void {
    let home: Menu = {display:"Home", route:"/home"};
    let about: Menu = {display:"About", route:"/about"};
    let user: Menu = {display:"Users", route:"/users/list"};
    let product: Menu = {display:"Products", route:"/products/list"};
    let vendor: Menu = {display:"Vendors", route:"/vendors/list"};
    let request: Menu = {display:"Requests", route:"/requests/list"};
    this.menu.push(home, about, user, product, vendor, request);
  };
  logout():void{
    this.system.logout();
  }

}
