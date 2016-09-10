import { BehaviorSubject } from 'rxjs';
import {
  AngularFire,
  AuthProviders
} from 'angularfire2';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum AuthState {
  In,
  Out,
  NotInitialized
};

@Injectable()
export class AuthService {
  username: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  auth: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  state: BehaviorSubject<AuthState> = new BehaviorSubject<AuthState>(AuthState.NotInitialized);

  redirectTo: string;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe((auth) => {
      this.auth.next(auth);

      if (!auth) {
        this.username.next(null);
        this.state.next(AuthState.Out);
        return;
      }

      switch (auth.provider) {
        case AuthProviders.Google:
          this.username.next(auth.google.displayName);
          this.state.next(AuthState.In);
          if (this.redirectTo) {
            this.router.navigate([this.redirectTo]);
            this.redirectTo = null;
          }
          break;
        default:
          this.username.next(null);
          this.state.next(AuthState.Out);
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.username.next(null);
    this.state.next(AuthState.Out);
    this.router.navigate(['']);
  }
}
