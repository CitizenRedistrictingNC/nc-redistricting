import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <div id="firebaseui-auth-container"></div>
    </div>
  `
})

export class LoginComponent {
  ngOnInit() {
    var uiConfig = {
      'signInSuccessUrl': 'http://localhost:3000',
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      'tosUrl': 'http://localhost:3000'
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("|user = "+ JSON.stringify(user));
    })
  }
}
