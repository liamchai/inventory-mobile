import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly _user: BehaviorSubject<User> = new BehaviorSubject<User>(
    null
  );
  get user(): User {
    return this._user.getValue();
  }
  set user(user: User) {
    this._user.next(user);
  }
  readonly user$ = this._user.asObservable();
  isAuthorized: boolean;
  userPin: number;
  db: any;
  constructor(private databaseService: DatabaseService) {
    this.db = this.databaseService.db;
  }

  setIsAuthorized(isAuthorized: boolean) {
    this.isAuthorized = isAuthorized;
  }

  login(userPin: number) {
    return this.db.get('users').then((res) => {
      this.user = res.data.find((x) => x.password == userPin);
      return this.user;
    });
  }

  isGuest(): boolean {
    return this.user.password == 1234;
  }

  isHacker(): boolean {
    return this.user.password == 1337;
  }
}
