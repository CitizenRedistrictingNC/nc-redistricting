import { provideRouter, RouterConfig } from '@angular/router';

import { DesignComponent } from './design.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { PersonalRankingsComponent } from './personal.rankings.component';
import { RankingsComponent } from './rankings.component';
import { ScoreComponent } from './score.component';
import { PageNotFoundComponent } from './page.not.found.component';

export const routes: RouterConfig = [
  // { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'design', component: DesignComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personal-rankings', component: PersonalRankingsComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
