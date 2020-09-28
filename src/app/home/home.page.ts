import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userPin: number;
  db: any;
  isAuthorized: boolean = true;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private databaseService: DatabaseService,
    private authenticationService: AuthenticationService,
    private navController: NavController
  ) {
    this.db = this.databaseService.db;
  }

  onLoginButtonClick() {
    this.db
      .get(this.userPin)
      .then(() => {
        this.authenticationService.setIsAuthorized(true);
        this.authenticationService.setUserPin(this.userPin);
        this.isAuthorized = true;
        this.navController.navigateRoot(['main/dashboard']);
      })
      .catch(() => {
        this.authenticationService.setIsAuthorized(false);
        this.authenticationService.setUserPin(null);
        this.isAuthorized = false;
      });
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
