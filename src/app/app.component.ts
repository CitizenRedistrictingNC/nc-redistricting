import { Component } from '@angular/core';
import {
  AngularFire,
  AuthProviders
} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
	template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/" routerLinkActivated="active">Citizen Redistricting NC</a>
        </div>
        <div class="collapse navbar-collapse">
          <div class="navbar-text navbar-right">
            <span [class.hidden]="!username">
              {{ username }} (<a (click)="logout()">Logout</a>)
            </span>
            <button [class.hidden]="username" class="btn btn-default btn-primary btn-xs" (click)="login()">Login</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  username: string;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(response => {
      if (!response) {
        return;
      }
      switch (response.provider) {
        case AuthProviders.Google:
          this.username = response.google.displayName;
          break;
        default:
          this.username = null;
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.username = null;
  }
}
