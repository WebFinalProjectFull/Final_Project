document.addEventListener("DOMContentLoaded", function(event) {
  
    var e = document.getElementById("profil");
    
    e.addEventListener( "click", function() {
  
      var name=prompt("Please verify  your account) ","");
      if ( name!=null && name!="" ) {
        output = "Well, Profile has been successfully updated!";
        }
      else {
        output = "Hey, Please verify your account!";
        }
      
      document.getElementById( "msg" ).innerText = output;
  
    }, false);
    
  });