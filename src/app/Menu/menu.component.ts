import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [];
  
  constructor() { } 

  ngOnInit(): void {
    let home: Menu = {display:"Home", route:"/home"};
    let about: Menu = {display:"About", route:"/about"};
    let user: Menu = {display:"Users", route:"/users/list"};
    let product: Menu = {display:"Products", route:"/products/list"};
    let vendor: Menu = {display:"Vendor", route:"/vendors/list"};
    this.menu.push(home, about, user, product, vendor);
  };
  

}
