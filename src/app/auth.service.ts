import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  AngularFire,
  AuthProviders
} from 'angularfire2';

@Injectable()
export class AuthService {
  username: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  auth: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      this.auth.next(auth);

      if (!auth) return;

      switch (auth.provider) {
        case AuthProviders.Google:
          this.username.next(auth.google.displayName);
          break;
        default:
          this.username.next(null);
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.username.next(null);
  }
}

