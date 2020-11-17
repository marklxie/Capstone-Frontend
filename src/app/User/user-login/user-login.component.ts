import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  user: User;
  constructor(
    private usersvc: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login():User{
    this.usersvc.login(this.username,this.password).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/home");},
      err => {
        console.log(err);
         this.username = ""; 
         this.password = "";}
    )
    return null;
  }
  check():void{
    console.log(this.username);
    console.log(this.password);
  }
}
