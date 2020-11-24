import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private system: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  request: PRequest;
  ifReject: boolean = false;
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    let id = this.route.snapshot.params.id;
    this.requestsvc.getRequest(id).subscribe(
      res =>{console.debug(res); this.request = res;},
      err =>{ console.error(err);}
    )
  }

  beforeReject():void{
    this.ifReject = !this.ifReject;
  }

  fixDigit(num:number):string{
    return "$"+num.toFixed(2);
  }
  
  reject():void{
    this.requestsvc.rejectRequest(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("requests/reviewlist");
      },
      err => {console.log(err)}
    )
  }
  approve():void{
    this.requestsvc.approveRequest(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("requests/reviewlist");},
      err => {console.log(err)}
    )
  }
  back():void{
    this.router.navigateByUrl("/requests/list");
  }
}
