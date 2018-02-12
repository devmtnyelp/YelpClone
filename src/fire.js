import { default as fb } from "firebase";

const config = {
  apiKey: "AIzaSyCPwkoqNlF-wDXKYjdun81syic4VhyuvKo",
  authDomain: "yelp-clone-58076.firebaseapp.com",
  databaseURL: "https://yelp-clone-58076.firebaseio.com",
  projectId: "yelp-clone-58076",
  storageBucket: "yelp-clone-58076.appspot.com",
  messagingSenderId: "397461719821"
};

export const firebase = fb.initializeApp(config);
