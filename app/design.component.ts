import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
  <div class="jumbotron">
    <h1>{{title}}</h1>
  </div>
  `
})

export class DesignComponent {
  title = 'Design Redistricting Plan';
}
