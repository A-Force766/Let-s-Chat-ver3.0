function adduser()
{
USN=document.getElementById("user_name").value;
localStorage.setItem("URS",USN);
window.location="kwitter_room.html"
}