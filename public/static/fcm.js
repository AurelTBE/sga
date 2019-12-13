importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBUwfqjKr5-kzmpjcXX4qOOiMilgeCsLjM",
  authDomain: "notificationssga.firebaseapp.com",
  databaseURL: "https://notificationssga.firebaseio.com",
  projectId: "notificationssga",
  storageBucket: "notificationssga.appspot.com",
  messagingSenderId: "1012938001250",
  appId: "1:1012938001250:web:44393feeec0ad5e9653a3b",
  measurementId: "G-FBMGGHCFPB"
});

firebase.messaging()