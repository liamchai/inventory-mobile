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
    this.isGuest = this.authenticationService.isGuest();
  }

  ngOnInit() {}

  onLogoutButtonClick() {
    this.authenticationService.setIsAuthorized(false);
    this.navController.navigateRoot('home');
  }
}
