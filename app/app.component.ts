import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
	template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/" routerLinkActivated="active">Citizen Redistricting NC</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row starter-row">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
