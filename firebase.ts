import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
    apiKey: 'AIzaSyDw8FvVFC5unl0kD3h1GrEzZvRtXI8U_nM',
    authDomain: 'auth-ulbi.firebaseapp.com',
    projectId: 'auth-ulbi',
    storageBucket: 'auth-ulbi.appspot.com',
    messagingSenderId: '431633834152',
    appId: '1:431633834152:web:c915a97302a2a2821ce29d',
};

const app = initializeApp(firebaseConfig);
