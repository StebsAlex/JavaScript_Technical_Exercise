# Technical Test

This is a example project using Ember. Below are some instructions on what to complete/modify on this project.

## Common Commands

`ember serve` - Starts the project and go to localhost:4200 to view the project

`ember test` - Runs the tests

## Firebase 

1. You need to make a firebase account.

2. Create a project and then:
  * Click on database tab 
  * Click create database 
  * Click start in test mode 

3. Go to overview page 

4. Click 'Add firebase to your web app'

5. Add your Firebase configuration to config/environment.js:

// config/environment.js

Get these values from the Firebase Console by clicking the [Add Firebase to your web app] button on the project overview page.

```javascript
var ENV = {
  firebase: {
    apiKey: "xyz",
    authDomain: "YOUR-FIREBASE-APP.firebaseapp.com",
    databaseURL: "https://YOUR-FIREBASE-APP.firebaseio.com",
    projectId: "YOUR-FIREBASE-APP",
    storageBucket: "YOUR-FIREBASE-APP.appspot.com",
    messagingSenderId: "00000000000"
  }
```

And then you will have your own firebase setup.


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#reserved-urls -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>