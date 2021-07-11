import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCUULGni-so2hSOwhIhXR7meP_8UD4mGyU",
      authDomain: "fir-pj-aee5f.firebaseapp.com",
      projectId: "fir-pj-aee5f",
      storageBucket: "fir-pj-aee5f.appspot.com",
      messagingSenderId: "948560732689",
      appId: "1:948560732689:web:29a75b2baf8774525c07b0",
      measurementId: "G-2TNHEH1G9L"
    }
  )
}
  
export default firebase