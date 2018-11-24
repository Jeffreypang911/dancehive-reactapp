import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCuAxL7o5KEP8T4VFMWBjS6NfjlEqkpHQE",
    authDomain: "dancehive-753e1.firebaseapp.com",
    databaseURL: "https://dancehive-753e1.firebaseio.com",
    projectId: "dancehive-753e1",
    storageBucket: "dancehive-753e1.appspot.com",
    messagingSenderId: "367416913434"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});

  db.collection('test').add({ test: 'tester'});