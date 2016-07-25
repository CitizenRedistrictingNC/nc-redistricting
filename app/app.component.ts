import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
  <div class="jumbotron">
    <h1>{{title}}</h1>
  </div>
  `
})

// export class Plan {
//   id: number;
//   name: string;
//   notes: string;
// }

export class AppComponent {
  title = 'Landing Page';
}
