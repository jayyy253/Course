// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzavGtc_WL0mqP_SC0CMpi-45MybYDMg",
  authDomain: "user-data-e96ed.firebaseapp.com",
  projectId: "user-data-e96ed",
  storageBucket: "user-data-e96ed.appspot.com",
  messagingSenderId: "1066626734064",
  appId: "1:1066626734064:web:ba3150781be7cf22422f35",
  measurementId: "G-XTX9L4NJ2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function signup() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  // Create user with email and password
  firebase.auth().createUserWithEmailAndPassword(newUsername, newPassword)
    .then((userCredential) => {
      // Signed up successfully
      alert("Sign up successful!");
    })
    .catch((error) => {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      // Logged in successfully
      alert('Login successful!');
      // Redirect or do something else after successful login
    })
    .catch((error) => {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});
