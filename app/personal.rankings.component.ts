import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <ul class="unstyled">
        <li> <button class="btn btn-warning">TODO</button> Add table</li>
      </ul>
    </div>
  `
})

export class PersonalRankingsComponent {
  title = 'Personal Rankings Component';
}
