import { Injectable } from '@angular/core';
import { CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService, AuthState } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise((fulfill, reject) => {
      this.as.state
        .filter(x => { return x != AuthState.NotInitialized })
        .take(1)
        .subscribe((as) => {
          console.log(as);
          if (as == AuthState.In) {
            return fulfill(true);
          }

          if (route.component.hasOwnProperty('isError')) {
            this.as.redirectTo = '';
          } else {
            this.as.redirectTo = state.url;
          }
          this.as.login();
          fulfill(false);
        });
    });
  }
}
