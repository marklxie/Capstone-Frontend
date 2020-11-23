import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/Requestline/requestline.class';
import { RequestlineService } from 'src/app/Requestline/requestline.service';
import { PRequest } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  constructor(
    private requestsvc: RequestService,
    private lineitemsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    request: PRequest;
    requestRelatedLines: Requestline[] =[];
    buttonHide: boolean = false;

    ngOnInit(): void {

      this.refresh();
      // let id = +this.route.snapshot.params.id;
      // this.lineitemsvc.listByRequest(id).subscribe(
      //   res => {
      //     console.debug(res);
      //     this.requestRelatedLines = res;
      //     console.debug(this.requestRelatedLines);
      //   },
      //   err => {console.error(err);}
      // )

      // this.requestsvc.getRequest(id).subscribe(
      //   res => {
      //     console.debug(res);
      //     this.request = res;
      //     console.log(this.request.userId);
      //     console.log(this.request.user);
      //   },
      //   err => {
      //     console.error(err);
      //   }
      // )
    }

    back(): void{
      this.router.navigateByUrl("/requests/list");
    }

    revealDelete(lineId : string): void{
      this.buttonHide = true;
      let id = (<HTMLInputElement>document.getElementById(lineId)).value;
      console.log(typeof id);
    }

    doNotDelete(): void{
      this.buttonHide = false;
    }

    refresh(): void{
      let id = this.route.snapshot.params.id;
      this.requestsvc.getRequest(id).subscribe(
        res =>{console.debug(res); this.request = res;},
        err =>{ console.error(err);}
      )
    }
    doDelete(lineId: string): void {
      let id = (<HTMLInputElement>document.getElementById(lineId)).value;
      let idNum = parseInt(id);
      console.log(typeof idNum);
      this.lineitemsvc.delete(idNum).subscribe(
        res => {
          console.log(res);
          this.refresh();
          this.buttonHide = false;
        },
        err => { console.error(err); }
      )
    }

    toLineEdit(lineId: String): void {
      this.router.navigateByUrl(`requestlines/edit/${lineId}`);
    }
      
    toLineCreate(): void {
      this.router.navigateByUrl(`requestlines/create/${this.request.id}`);
    }

}
