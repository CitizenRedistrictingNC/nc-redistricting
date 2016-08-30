import { Injectable } from '@angular/core';
import { Plan } from './plan.class';
import {
  AngularFire,
  AngularFireAuth,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';

@Injectable()
export class PlanService {
  constructor(private af: AngularFire) { }

  getTopPlans(): void {}
  getUserPlans(userId): void {}

  submitPlan(plan: Plan): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.af.auth.subscribe(auth => {
        if (!auth) {
          reject(new Error('Not logged in!'));
          return;
        }

        let uid = auth.uid;
        let user = this.af.database.list('/user-data/'+ auth.uid +'/designs');
        let designs = this.af.database.list('/designs');
        let new_key = designs.push({
          uid,
          name: plan.name,
          notes: plan.notes
        });

        new_key.then(id => {
            let pushed = {};
            pushed[new_key.key] = true;
            user.push(pushed)
              .then(_ => resolve(new_key))
              .catch(reject);
          })
          .catch(reject);
      });
    });
  }
}
