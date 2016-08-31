import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';
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

  getUserPlans(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.af.auth.subscribe(auth => {
        if (!auth) {
          reject(new Error('Not logged in!'));
          return;
        }

        let results = this.af.database.list(`/user-data/${auth.uid}/designs`)
          .map(vals => {
            for (let i=0; i < vals.length; i++) {
              let key = vals[i]['$value'];
              vals[i] = this.af.database.object(`/designs/${key}`);
            }
            return vals;
          });
        resolve(results);
      });
    });
  }

  submitPlan(plan: Plan): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.af.auth.subscribe(auth => {
        if (!auth) {
          reject(new Error('Not logged in!'));
          return;
        }

        let uid = auth.uid;
        let user = this.af.database.list(`/user-data/${uid}/designs`);
        let designs = this.af.database.list('/designs');
        let new_key = designs.push({
          uid,
          name: plan.name,
          notes: plan.notes
        });

        new_key.then(id => {
            user.push(new_key.key)
              .then(_ => resolve(new_key))
              .catch(reject);
          })
          .catch(reject);
      });
    });
  }
}
