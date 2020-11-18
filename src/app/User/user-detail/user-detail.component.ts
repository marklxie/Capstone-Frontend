import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  buttonHide:boolean = false;

  constructor(
    private usersvc:UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.getUser(id).subscribe(
      res =>{ 
        console.log(res);
         this.user= res;
        },
      err =>{ 
        console.log(err)
      }
    )
  }

  back():void{
    this.router.navigateByUrl("/users/list");
  }

  hide():void{
    this.buttonHide = !this.buttonHide;
  }

  delete(): void{
    let id = +this.route.snapshot.params.id;
    this.usersvc.delete(id).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/users/list");
      },
      err =>{
        console.error(err);
      }
    )

  }
}
