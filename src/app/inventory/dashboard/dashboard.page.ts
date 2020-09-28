import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  isHacker: boolean;
  constructor(private authenticationService: AuthenticationService) {
    // i dunno why using 3 = is false since userPin is a number
    this.isHacker = this.authenticationService.userPin == 1337;
  }

  ngOnInit() {}
}
