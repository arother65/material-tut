/**
 * 
 *  Stand: 12.01.2026
 *  Gets an "app"-object and returns it for the main component "Notes.jsx"
 */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions needed from the SDKs used here:
import { initializeApp } from "firebase/app"

import { getFirestore } from 'firebase/firestore'

import {
   collection, 
   getDocs,
   // serverTimestamp,
   // doc,
   // getDoc, 
   // addDoc
} from 'firebase/firestore'

import {
   getAuth,
   // signInAnonymously 
} from 'firebase/auth'

// getting an app-object to get an db-object later 
async function getFirebaseApp() {

   //* Your web app's Firebase configuration
   const firebaseConfig = {
      apiKey: "AIzaSyBvvrVevAgumjE-U2e2Wp43VdZb9Y8RSh8",
      authDomain: "prj-test-98994.firebaseapp.com",
      projectId: "prj-test-98994",
      storageBucket: "prj-test-98994.firebasestorage.app",
      messagingSenderId: "487823466018",
      appId: "1:487823466018:web:f375d773e8e401ae76747b"
   }

   //* Initialize Firebase
   const app = initializeApp(firebaseConfig)
   return app
}  // getFirebaseApp()

// getting an db object
async function getDBObject() {
   const app = await getFirebaseApp()
   const dbObject = getFirestore(app)
   return dbObject
}  // getDBObject()

// getting data with the db-object
export default async function getCollection(ivCollectionID, userDataUI) {

   const dbObject = await getDBObject()
   const auth = getAuth()
   let userData = {}
   let result = false

   //* Read collection
   const querySnapshot = await getDocs(collection(dbObject, ivCollectionID))

   // querySnapshot.docs[0]._document.data.value.mapValue.fields

   // console.log('serverTimestamp:', serverTimestamp())
   querySnapshot.forEach(docSnap => {
      console.log('auth: ', auth)
      userData = docSnap.data()

      if (userDataUI.userName === userData.userName && userDataUI.passWord === userData.passWord) {
         result = true
      } else {
         result = false
      }
   })

   return result
}  // getCollection()
// await getCollection()  // for debugging only


//* auth(): getAuth().currentUser, signInAnonymously()
// await signInAnonymously(auth)
//    .then((userCredentials) => {
//       console.log(userCredentials)
//    })
//    .catch((e) => {
//       console.log(e.message)
//    })

//
// export { dbObject }