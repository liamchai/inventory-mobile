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
    this.isHacker = this.authenticationService.isHacker();
  }

  ngOnInit() {}
}
