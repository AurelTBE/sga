importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDIFMxGHgJ64un5OQmiUQW-1umTaEpY8TA",
  authDomain: "notifications-sga.firebaseapp.com",
  databaseURL: "https://notifications-sga.firebaseio.com",
  projectId: "notifications-sga",
  storageBucket: "notifications-sga.appspot.com",
  messagingSenderId: "539284504552",
  appId: "1:539284504552:web:9eb3d24371c3ea28352e5d",
  measurementId: "G-ND9S7BEXVX"
});

self.addEventListener("push", (event) => {
  const pushData = event.data.notification.json();
  event.waitUntil(
      self.registration.showNotification(pushData.title, {
          body: pushData.body,
          icon: pushData.icon,
          badge: pushData.badge,
          image: pushData.image,
      })
  );
});