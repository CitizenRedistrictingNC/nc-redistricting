import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
  <div class="jumbotron">
    <h1>{{title}}</h1>
  </div>
  `
})

export class PersonalRankingsComponent {
  title = 'Personal Rankings Component';
}
