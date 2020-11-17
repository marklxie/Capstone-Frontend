import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User;
  constructor(
    private usersvc:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

   createNew():any{
     return this.usersvc.create(this.user).subscribe(
       res => {
         console.log(res);
         this.router.navigateByUrl("/users/list");
        },
       err => {console.error(err)}
     )
   }

   back():void{
    this.router.navigateByUrl("/users/list");
  }
   check():void{
     console.log(this.user);
   }
}
