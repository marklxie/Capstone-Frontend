import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { Product } from 'src/app/Product/product.class';
import { ProductService } from 'src/app/Product/product.service';
import { User } from 'src/app/User/user.class';
import { UserService } from 'src/app/User/user.service';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent implements OnInit {
  
  constructor(
    private system: SystemService,
    private requestsvc: RequestService,
    private usersvc: UserService
    ) { }

  requests: PRequest[];  
  users: User[];
  user: User;
  searchcriteria: string = "";
  keys: string[] = ["id", "description", "justification","rejectionreason",
                    "deliveryMode","status","total", "userId", "user.firstname"];

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => {console.log(res), this.requests = res;},
      err => {console.error(err)}
    );
    this.usersvc.list().subscribe(
      res => {console.log(res), this.users = res;},
      err => {console.error(err)}
    );
    this.user = this.system.loggedInUser;
  }

}
