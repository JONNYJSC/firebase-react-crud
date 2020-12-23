import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyByJpB5VaEpu3rKFf3TgcRN_U3L8Rl5Mi4',
	authDomain: 'fb-crud-react-762b9.firebaseapp.com',
	projectId: 'fb-crud-react-762b9',
	storageBucket: 'fb-crud-react-762b9.appspot.com',
	messagingSenderId: '497195455794',
	appId: '1:497195455794:web:d6933b58f15a5d6736b32b',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
