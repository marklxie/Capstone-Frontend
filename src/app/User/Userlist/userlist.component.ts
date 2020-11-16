import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService} from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(private usersvc: UserService) { }
  users: User[];

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { 
        console.log(res);
        this.users = res;},
      err => {console.error(err)}
    )
  }

  
}
