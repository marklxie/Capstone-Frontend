import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/User/user.class';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() menu:Menu;
  constructor(
    private system: SystemService
  ) { }
  user: User;
  ngOnInit(): void {
    this.system.user.subscribe(
      res => {this.user = res;},
      err => {console.error(err);}
    )
  }

  itemCheck():boolean{
    if(this.menu.needsAdmin == false && this.menu.needsReviewer == false){
      return true;
    }
    if(this.menu.needsAdmin == true){
      if(this.menu.needsAdmin == this.user.isAdmin){
        return true;
      }
    }
    if(this.menu.needsReviewer == true){
      if(this.menu.needsReviewer == this.user.isReviewer){
        return true;
      }
    }
    return false;
  }

}
