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
      this.as.state.take(1).subscribe((as) => {
        if (as == AuthState.NotInitialized) {
          return;
        }

        if (as == AuthState.In) {
          return fulfill(true);
        }

        this.as.redirectTo = state.url;
        this.as.login();
        fulfill(false);
      });
    });
  }
}
