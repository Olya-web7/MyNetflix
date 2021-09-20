import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {

    apiKey: "AIzaSyBOIcei68rZIzLYV6M9VZSLkyZzNuaoLEk",
    authDomain: "netflix-olya.firebaseapp.com",
    projectId: "netflix-olya",
    storageBucket: "netflix-olya.appspot.com",
    messagingSenderId: "335503244386",
    appId: "1:335503244386:web:72b396010568c97fa4a53b",

};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
