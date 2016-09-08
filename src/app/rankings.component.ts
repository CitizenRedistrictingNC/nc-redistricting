import { Component } from '@angular/core';
import { PlanService } from './plan.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
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
          <tr *ngFor="let plan of plans | async">
            <td>{{ plan.name }}</td>
            <td class="text-right">{{ plan.created | date }}</td>
            <td class="text-right"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class RankingsComponent {
  plans: FirebaseListObservable<any>;

  constructor(private planService: PlanService) {
    this.plans = planService.getTopPlans();
  }
}
