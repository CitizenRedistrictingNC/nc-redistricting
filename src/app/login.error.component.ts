import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	template: `
  <div class="row starter-row">
    <h2>Login Error</h2>
    <p>
      An error was encountered logging in. Please ensure that cookies are enabled
      for your browser.
    </p>
    <p>
    For Firefox, follow <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">these instructions</a>
    to turn on third-party cookie support.
    </p>
  </div>
  `
})

export class LoginErrorComponent {
  isError = true;
}
