import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userPin: number;
  isUnauthorized: boolean = false;
  db: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private databaseService: DatabaseService,
    private navController: NavController
  ) {
    this.db = this.databaseService.db;
  }

  onLoginButtonClick() {
    this.db
      .get(this.userPin)
      .then(() => {
        // not really understand this one
        this.navController.navigateRoot(['/main/dashboard']);
      })
      .catch(() => {
        this.isUnauthorized = true;
      });
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
