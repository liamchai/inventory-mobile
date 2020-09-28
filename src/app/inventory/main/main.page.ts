import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  isGuest: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private navController: NavController
  ) {
    // i dunno why using 3 = is false since userPin is a number
    this.isGuest = this.authenticationService.userPin == 1234;
  }

  ngOnInit() {}

  onLogoutButtonClick() {
    this.authenticationService.setIsAuthorized(false);
    this.authenticationService.setUserPin(null);
    this.navController.navigateRoot('home');
  }
}
