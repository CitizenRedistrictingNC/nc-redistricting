import { provideRouter, RouterConfig } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { DesignComponent } from './design.component';
import { HomeComponent } from './home.component';
import { PersonalRankingsComponent } from './personal.rankings.component';
import { RankingsComponent } from './rankings.component';
import { ScoreComponent } from './score.component';
import { PageNotFoundComponent } from './page.not.found.component';

export const routes: RouterConfig = [
  { path: 'design',
    component: DesignComponent,
    canActivate: [AuthGuard]
  },
  { path: 'personal-rankings',
    component: PersonalRankingsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'rankings', component: RankingsComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
