import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
	template: `
  <h1>{{title}}</h1>

  <ul>
    <li><a routerLink="/design" routerLinkActivated="active">Design</a></li>
    <li><a routerLink="/personal-rankings" routerLinkActivated="active">Personal Rankings</a></li>
    <li><a routerLink="/rankings" routerLinkActivated="active">Rankings</a></li>
  </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
  title = 'Home';
}
