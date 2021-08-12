 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyB_oN7Ovk4Blf0-hctpawkfpLQXXyMTJ7U",
      authDomain: "c-94-8b185.firebaseapp.com",
      databaseURL: "https://c-94-8b185-default-rtdb.firebaseio.com",
      projectId: "c-94-8b185",
      storageBucket: "c-94-8b185.appspot.com",
      messagingSenderId: "461129188655",
      appId: "1:461129188655:web:1dc204d2c30d4bb4d48dda"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}