import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th class="text-right">Date</th>
            <th class="text-right">Score</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Map</td>
            <td class="text-right">3/16/2016</td>
            <td class="text-right">6.2</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Second Map</td>
            <td class="text-right">3/25/2016</td>
            <td class="text-right">6.9</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Third map</td>
            <td class="text-right">5/5/2016</td>
            <td class="text-right">8.2</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class PersonalRankingsComponent { }
