import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

    request: PRequest = new PRequest;
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.getRequest(id).subscribe(
      res => {
        console.log(res);
        this.request = res;
      },
      err => {console.error(err)}
    )
  }
  change():void{
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.log(res);
         this.router.navigateByUrl("/requests/list");},
      err => {console.error(err)}
    )
  }
  back():void{
    this.router.navigateByUrl("/requests/list");
  }
}
