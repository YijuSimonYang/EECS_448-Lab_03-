previous = function(){
  let image = document.getElementById("image").src;
  let path = "";
  path = path + getpath(window.location.href);
  if(image == path+"first.png"){
    document.getElementById("image").src = path + "six.jpeg";
  }else if(image == path+"second.png"){
    document.getElementById("image").src = path + "first.png";
  }else if(image == path+"third.jpeg"){
    document.getElementById("image").src = path + "second.png";
  }else if(image == path+"four.jpeg"){
    document.getElementById("image").src = path + "third.jpeg";
  }else if(image == path+"five.jpeg"){
    document.getElementById("image").src = path + "four.jpeg";
  }else if(image == path+"six.jpeg"){
    document.getElementById("image").src = path + "five.jpeg";}

 }


next = function(){
  let image = document.getElementById("image").src;
  let path = "";
  path = path + getpath(window.location.href);
      if(image == path+"six.jpeg"){
        document.getElementById("image").src = path+"first.png";
      }else if(image == path+"second.png"){
        document.getElementById("image").src = path+"third.jpeg";
      }else if(image == path+"third.jpeg"){
        document.getElementById("image").src = path+"four.jpeg";
      }else if(image == path+"four.jpeg"){
        document.getElementById("image").src = path+"five.jpeg";
      }else if(image == path+"five.jpeg"){
        document.getElementById("image").src = path+"six.jpeg";
      }else if(image == path+"first.png"){
        document.getElementById("image").src = path+"second.png";}
}

getpath = function(path){
  newpath = "";
  for(let i = 0; i < (path.length - 9); i++){
    newpath = newpath + path[i];
  }
  return(newpath);
}
