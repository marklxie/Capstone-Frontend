import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User/user.class';
import { SystemService } from '../../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private system: SystemService
  ) { }

  user: User = null;

  ngOnInit(): void {
    this.user = this.system.loggedInUser;
  }

}
