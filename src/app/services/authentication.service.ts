import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  db: any;
  isAuthorized: boolean;
  userPin: number;
  constructor(private databaseService: DatabaseService) {
    this.db = this.databaseService.db;
  }

  login(userPin: number) {
    this.db
      .get(userPin)
      .then(() => {
        this.isAuthorized = true;
        this.userPin = userPin;
      })
      .catch(() => {
        this.isAuthorized = false;
      });
  }
}
