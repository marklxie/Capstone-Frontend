import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  

  constructor(
    private usersvc:UserService,
    private route: ActivatedRoute,
    private router: Router,
    private system: SystemService
  ) { }

  user: User;
  buttonHide:boolean = false;
  loggedUser: User;
  
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
    this.system.user.subscribe(
      res => {this.loggedUser = res;},
      err => {console.error(err);}
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
