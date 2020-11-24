import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  request: PRequest = new PRequest;
  buttonHide: boolean = false;
  textHide: boolean = false;

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

  back(): void{
    this.router.navigateByUrl("/requests/list");
  }

  hideButton(): void{
    this.buttonHide = !this.buttonHide;
  }
  hideText(): void{
    this.textHide = !this.textHide;
  }

  delete(): void {
    let id = +this.route.snapshot.params.id;
    if (this.request.requestlines == null || this.request.requestlines.length == 0) {
      this.requestsvc.delete(id).subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl("/products/list");
        },
        err => {
          console.error(err);
        })
    }
    else {
      this.hideText();
      console.log("There are still request lines")
    }
    return;
  }

  fixDigit(num:number):string{
    return "$"+num.toFixed(2);
  }

}
