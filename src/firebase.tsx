import firebase from 'firebase';
import firebaseConfig from './config.js';

// export default firebaseConfig;
firebase.initializeApp(firebaseConfig);

export default firebase;
