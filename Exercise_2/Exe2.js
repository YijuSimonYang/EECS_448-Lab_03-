previous = function(){
let image = document.getElementById("image").src;
  if(image == "first.png")
  {alert("First page");}
  else{
    if(image == "second.png"){
      document.getElementById("image").src = "first.png";
    }
    else if(image == "third.jpeg"){
      document.getElementById("image").src = "second.png";
    }
    else if(image == "four.jpeg"){
      document.getElementById("image").src = "third.jpeg";
    }
    else if(image == "five.jpeg"){
      document.getElementById("image").src = "four.jpeg";
    }
    else if(image == "six.jpeg"){
      document.getElementById("image").src = "five.jpeg";
    }
  }
}


next = function(){
  let image = document.getElementById("image").src;
    if(image == "six.jpeg")
    {alert("Last page");}
    else{
      if(image == "second.png"){
        document.getElementById("image").src = "third.jpeg";
      }
      else if(image == "third.jpeg"){
        document.getElementById("image").src = "four.jpeg";
      }
      else if(image == "four.jpeg"){
        document.getElementById("image").src = "five.jpeg";
      }
      else if(image == "five.jpeg"){
        document.getElementById("image").src = "six.jpeg";
      }
      else if(image == "first.png"){
        document.getElementById("image").src = "second.png";
      }
    }
}
