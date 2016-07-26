import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th class="text-right">Score</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best Score</td>
            <td class="text-right">9.5</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Second Best</td>
            <td class="text-right">9.0</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Third Best Score</td>
            <td class="text-right">6.5</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class RankingsComponent {
  title = 'Rankings';
}
