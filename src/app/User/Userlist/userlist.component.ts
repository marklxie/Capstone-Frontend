import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService} from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(
    private usersvc: UserService,
    private system: SystemService
    ) { }
  users: User[];
  keys: string[];
  searchcriteria: string = "";
  ngOnInit(): void {
    console.log(this.system.user);
    this.usersvc.list().subscribe(
      res => { 
        console.log(res);
        this.users = res;},
      err => {console.error(err)}
    )

    this.keys = Object.getOwnPropertyNames(new User);
    console.log(this.keys);
  }

  
}
