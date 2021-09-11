var firebaseConfig = {
      apiKey: "AIzaSyBVvD8Esa5KTajPl2bmTfa-7kqv4v5YCWo",
      authDomain: "kwitter-6b972.firebaseapp.com",
      databaseURL: "https://kwitter-6b972-default-rtdb.firebaseio.com",
      projectId: "kwitter-6b972",
      storageBucket: "kwitter-6b972.appspot.com",
      messagingSenderId: "23162063645",
      appId: "1:23162063645:web:ae46676bad06f4521b6ff4"
    };
    
    
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});
});
}
getData();
function redirectToRoomName(name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}