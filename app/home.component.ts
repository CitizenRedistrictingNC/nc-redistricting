import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <h1>About</h1>

      Amet adipisicing saepe atque explicabo possimus rerum! Quaerat ab quas magni dolorem quaerat? Mollitia odio tempora quisquam architecto similique. A dolore omnis velit cum sint temporibus dicta iusto. Amet qui?

      <ul>
        <li>
          <a routerLink="/rankings" routerLinkActivated="active">Rankings</a>: See the highest ranking plans.
        </li>
        <li>
          <a routerLink="/design" routerLinkActivated="active">Design</a>: Design your own district plan.
        </li>
      </ul>

    </div>

    <div class="row">
      <hr>

      List of pages:
      <ul>
        <li><a routerLink="/design" routerLinkActivated="active">Design</a></li>
        <li><a routerLink="/personal-rankings" routerLinkActivated="active">Personal Rankings</a></li>
        <li><a routerLink="/rankings" routerLinkActivated="active">Rankings</a></li>
      </ul>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent { }
