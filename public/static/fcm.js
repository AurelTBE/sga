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

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  res = payload.data;
  // Customize notification here
  const notificationTitle = res.title;
  const notificationOptions = {
    body: res.body,
    icon: '/static/android-chrome-192x192.png',
    badge: '/static/ic_stat_dragon.png',
    image: res.image,
    data: {
      link: res.click_action
    }
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  const link = event.notification.data.link

  event.notification.close();

  event.waitUntil(
    clients.openWindow(link)
  );
});
