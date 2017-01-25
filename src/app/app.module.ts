import { AppComponent  } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';
import { PlanService } from './plan.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

var firebaseConfig = {
  apiKey: "AIzaSyAdd3xy0z4sPwgiTUIYfoJ5KzpcHVWAjIE",
  authDomain: "nc-citizenredistrict.firebaseapp.com",
  databaseURL: "https://nc-citizenredistrict.firebaseio.com",
  storageBucket: "nc-citizenredistrict.appspot.com",
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

var r = [];
r = routes.map((d) => d.component) as any[];
r.push(AppComponent);

@NgModule({
  declarations: r,
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [ AppComponent ],
  providers: [ AuthGuard, AuthService, PlanService ]
})
export class AppModule {}
