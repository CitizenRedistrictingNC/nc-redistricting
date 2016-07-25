import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <ul class="unstyled">
      <li> <button class="btn btn-warning">TODO</button> Add table</li>
    </ul>
  `
})

export class PersonalRankingsComponent {
  title = 'Personal Rankings Component';
}
