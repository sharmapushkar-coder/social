var database=firebase.database();
function create(){
  document.getElementById("info").innerHTML=""
  if(navigator.onLine){
    document.getElementById("btn-create").innerHTML="Request Sent✔"
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var username=document.getElementById("username").value;
    var clas=document.getElementById("class").value;
    database.ref("requests").push().set({
      'name':name,
      'class':clas,
      'username':username,
      'password':password'username'
    })
  }
  else{
    document.getElementById("info").innerHTML="Unable to connect with the server."
  }
}