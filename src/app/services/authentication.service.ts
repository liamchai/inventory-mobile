import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthorized: boolean;
  userPin: number;
  constructor() {}

  setIsAuthorized(isAuthorized: boolean) {
    this.isAuthorized = isAuthorized;
  }

  setUserPin(userPin: number) {
    this.userPin = userPin;
  }
}
