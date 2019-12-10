import 'firebase/messaging'
import 'firebase/firestore'
import firebase from 'firebase/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token')
  },

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
      if ((await this.tokenInlocalforage()) !== null) {
        return false
      }

      const messaging = firebase.messaging()
      await messaging.requestPermission()
      const token = await messaging.getToken()
      const db = firebase.firestore();

      localforage.setItem('fcm_token', token)
      db.collection("users").doc(token.toString()).set({
        token: token.toString(),
        date: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
      })
      console.log('fcm_token', token)
    } catch (error) {
      console.error(error)
    }
  }
}

export { firebaseCloudMessaging }