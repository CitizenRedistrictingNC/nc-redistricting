import { Component } from '@angular/core';
import { PlanService } from './plan.service';

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
          <tr *ngFor="let plan of plans">
            <td>{{ (plan | async)?.name }}</td>
            <td class="text-right">3/25/2016</td>
            <td class="text-right">6.9</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class PersonalRankingsComponent {
  plans = [];

  constructor(private planService: PlanService) {
    planService.getUserPlans()
      .then(v => {
        // TODO when I delete something from firebase its content disappears,
        // but the list itself doesn't - I guess I have to add a 'subscribe' to
        // this element here and then remove myself from the list when I detect
        // that I have been deleted.
        v.subscribe(els => this.plans.push.apply(this.plans,els))
      })
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.planService.getUserPlans()
  }
}
