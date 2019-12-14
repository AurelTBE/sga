import 'firebase/messaging'
import 'firebase/firestore'
import fetch    from 'isomorphic-fetch'
import firebase from 'firebase/app'

const firebaseCloudMessaging = {
  init: async function () {
    firebase.initializeApp({
      apiKey: "AIzaSyDIFMxGHgJ64un5OQmiUQW-1umTaEpY8TA",
      authDomain: "notifications-sga.firebaseapp.com",
      databaseURL: "https://notifications-sga.firebaseio.com",
      projectId: "notifications-sga",
      storageBucket: "notifications-sga.appspot.com",
      messagingSenderId: "539284504552",
      appId: "1:539284504552:web:9eb3d24371c3ea28352e5d",
      measurementId: "G-ND9S7BEXVX"
    })

    try {
      const messaging = firebase.messaging()
      await messaging.requestPermission()
      const token = await messaging.getToken()
      const db = firebase.firestore();

      db.collection("users").doc(token.toString()).set({
        token: token.toString(),
        date: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
      })
      // Topis
      fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/actus`, {
        method: 'post',
        headers: new Headers({
          'Content-Type':'application/json',
          'Content-Length': 0,
          'Authorization': process.env.FCM_SERVER_KEY
        }),
      })
      .then((res) => {
        res.status == 200 ? console.log('Inscrit aux notifications') : console.log("Problème d'inscription")
      })
      .catch((err)=>{
          console.error('Subscribe ERROR:',err)
      });
    } catch (error) {
      console.error(error)
    }
  }
}

export { firebaseCloudMessaging }