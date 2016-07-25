import { provideRouter, RouterConfig } from '@angular/router';
// import { PathLocationStrategy } from '@angular/router';

import { DesignComponent } from './design.component';
import { HomeComponent } from './home.component';
import { PersonalRankingsComponent } from './personal.rankings.component';
import { RankingsComponent } from './rankings.component';
import { PageNotFoundComponent } from './page.not.found.component';

const routes: RouterConfig = [
  // { path: 'crisis-center', component: CrisisCenterComponent },
  // { path: 'heroes', component: HeroListComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'design', component: DesignComponent },
  { path: 'personal-rankings', component: PersonalRankingsComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
