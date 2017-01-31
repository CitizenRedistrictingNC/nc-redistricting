/* tslint:disable:no-unused-variable */

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

class MockAuthService {
}

describe('App: NcRedistricting', () => {
  beforeEach(() => {
    this.authService = new MockAuthService();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: this.authService }
      ]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'Citizen Redistricting NC'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   console.log(JSON.stringify(app))
  //   expect(app.title).toEqual('Citizen Redistricting NC');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
