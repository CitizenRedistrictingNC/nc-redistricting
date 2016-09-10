import { AuthService } from './auth.service';
import { Component } from '@angular/core';

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
            <span [class.hidden]="!(as.username | async)">
              {{ as.username | async }} (<a (click)="as.logout()">Logout</a>)
            </span>
            <button [class.hidden]="(as.username | async)" class="btn btn-default btn-primary btn-xs" (click)="as.login()">Login</button>
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
  constructor(public as: AuthService) { }
}
