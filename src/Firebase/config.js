import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJquTmiuUhmiH0sE8MJJkhRSY6MIZtt_w",
    authDomain: "groceryapp-4a75b.firebaseapp.com",
    databaseURL: "https://groceryapp-4a75b.firebaseio.com",
    projectId: "groceryapp-4a75b",
    storageBucket: "groceryapp-4a75b.appspot.com",
    messagingSenderId: "596248183674",
    appId: "1:596248183674:web:d93ec1a30afd94a0da0cc3"
  };

  const fire =  firebase.initializeApp(firebaseConfig);

  export default fire;