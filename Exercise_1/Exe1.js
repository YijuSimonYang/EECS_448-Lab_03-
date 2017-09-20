

check = function(){
  let first = document.getElementById("firstpassword").value; // getvalue
  let second = document.getElementById("secondpassword").value;
  if(checklength(first)){  checkequal(first,second);} // check equal and check lengrh
  document.getElementById("firstpassword").value = ""; // clear all
  document.getElementById("secondpassword").value = ""; //clear all
}

checkequal = function(password1,password2){
  if(password1 == password2)
  {
    alert("Nice, You got the same password");
  }
  else {
    alert("Two password are not the same, Please Check");
  }
}

checklength = function(first){
  if(first.length <8)
  {alert("password cannot less than 8");
    return(false);}
  else{
    return(true);
  }
}
