import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  onLogoutButtonClick() {
    this.authenticationService.setIsAuthorized(false);
    this.authenticationService.setUserPin(null);
    this.navController.navigateRoot('home');
  }
}
