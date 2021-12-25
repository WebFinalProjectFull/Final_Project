document.addEventListener("DOMContentLoaded", function(event) {
  
    var e = document.getElementById("feed");
    
    e.addEventListener( "click", function() {
  
      var name=prompt("Please  enter your password ?","");
      if ( name!=null && name!="" ) {
        output = "Well  You seem very daring!";
        }
      else {
        output = "Hey, I asked your password!";
        }
      
      document.getElementById( "msg" ).innerText = output;
  
    }, false);
    
  });