import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/User/user.class';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  constructor(
    private system: SystemService,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  request: PRequest = new PRequest;
  loggedInUser: User = this.system.loggedInUser;

  ngOnInit(): void {
  }

  createNew():any{
    this.request.userId = this.loggedInUser.id;
    return this.requestsvc.create(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/requests/list");
       },
      err => {console.error(err)}
    )
  }

  back():void{
   this.router.navigateByUrl("/requests/list");
 }
  check():void{
    console.log(this.request);
  }

}
