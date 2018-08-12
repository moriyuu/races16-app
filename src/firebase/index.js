import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAxKbaD9K-vc5kZCbN4yPRMzVEfRMQQslI",
  authDomain: "races16-app.firebaseapp.com",
  databaseURL: "https://races16-app.firebaseio.com"
};
firebase.initializeApp(config);

export const database = firebase.database();
