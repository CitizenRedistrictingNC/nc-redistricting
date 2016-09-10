import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	template: `
    <div class="row starter-row">
      <h1>About</h1>

      <p>
        The Citizen Redistricting Project lets citizens submit their own redistricting
        plans for North Carolina State Legislature districts.
      </p>


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
        <li><a routerLink="/personal-rankings" routerLinkActivated="active">Personal Rankings</a></li>
        <li><a routerLink="/score" routerLinkActivated="active">Score</a></li>
      </ul>
    </div>
  `
})

export class HomeComponent { }
