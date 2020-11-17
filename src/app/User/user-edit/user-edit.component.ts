import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.getUser(id).subscribe(
      res => {
        console.debug(res);
        this.user = res;
        
      },
      err =>{
        console.error(err);
      }
    )
  }

  save():void{
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User Changed:",res);
        this.router.navigateByUrl("users/list");
     },
     err => {console.error(err)}
    )
  }
  back():void{
    this.router.navigateByUrl("/users/list");
  }
}
