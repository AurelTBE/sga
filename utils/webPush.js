import 'firebase/messaging'
import 'firebase/firestore'
import fetch    from 'isomorphic-fetch'
import firebase from 'firebase/app'

const firebaseCloudMessaging = {
  init: async function () {
    firebase.initializeApp({
      apiKey: "AIzaSyBUwfqjKr5-kzmpjcXX4qOOiMilgeCsLjM",
      authDomain: "notificationssga.firebaseapp.com",
      databaseURL: "https://notificationssga.firebaseio.com",
      projectId: "notificationssga",
      storageBucket: "notificationssga.appspot.com",
      messagingSenderId: "1012938001250",
      appId: "1:1012938001250:web:44393feeec0ad5e9653a3b",
      measurementId: "G-FBMGGHCFPB"
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
      console.log('FCM Token : ', token)
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
        res.status == 200 ? console.log('Inscrit au topic Actus') : console.log("Problème d'inscription")
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