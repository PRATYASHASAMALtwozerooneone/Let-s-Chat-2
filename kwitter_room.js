// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyByPY81QPGmYJ5aYpP0WUKwHpdOkXiWrws",
      authDomain: "let-s-chat-4237b.firebaseapp.com",
      projectId: "let-s-chat-4237b",
      storageBucket: "let-s-chat-4237b.appspot.com",
      messagingSenderId: "893504380505",
      appId: "1:893504380505:web:e576c147420e753ff8db48"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
