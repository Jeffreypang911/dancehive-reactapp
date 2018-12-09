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


  const docRef = db.collection("series").doc("SuKEtFpGVfRfk73BkxYU").collection("videos");

  export { firebase, db as default };


  // docRef.get().then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // });

//   docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


// db.collection("series").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });



