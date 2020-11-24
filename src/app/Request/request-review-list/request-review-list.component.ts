import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestlineService } from 'src/app/Requestline/requestline.service';
import { User } from 'src/app/User/user.class';
import { UserService } from 'src/app/User/user.service';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private linesvc: RequestlineService,
    private router: Router,
    private system:SystemService,
    private usersvc: UserService
  ){}
  requests: PRequest[];  
  users: User[];
  user: User;
  searchcriteria: string = "";
  keys: string[] = ["id", "description", "justification","rejectionreason",
                    "deliveryMode","status","total", "userId"];
  
  ngOnInit(): void {

    this.usersvc.list().subscribe(
      res => {console.log(res), this.users = res;},
      err => {console.error(err)}
    );
    this.user = this.system.loggedInUser;
    this.requestsvc.listReview(this.user.id).subscribe(
      res => {console.log(res), this.requests = res;},
      err => {console.error(err)}
    );
  }

  fixDigit(num:number):string{
    return "$"+num.toFixed(2);
  }
}
