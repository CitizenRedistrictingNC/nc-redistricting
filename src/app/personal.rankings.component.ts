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
            <td class="text-right">{{ (plan | async)?.created | date }}</td>
            <td class="text-right"></td>
            <td></td>
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
        v.subscribe(els => {
          this.plans.splice(0, this.plans.length);
          this.plans.push.apply(this.plans,els);
        })
      })
      .catch(err => console.log(err))
  }

  ngOnInit() {
    this.planService.getUserPlans()
  }
}
