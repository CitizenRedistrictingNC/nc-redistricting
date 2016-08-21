import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/" routerLinkActivated="active">Citizen Redistricting NC</a>
        </div>
        <div class="collapse navbar-collapse">
          <div class="navbar-text navbar-right">
            <a routerLink="login" routerLinkActivated="true">
              <button id="loginButton" class="btn btn-default btn-primary btn-xs">Login</button>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { }
