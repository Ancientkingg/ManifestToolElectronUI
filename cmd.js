var is = require("electron-is");
function setStatus(msg)    { getStatus().innerHTML = msg; };
var username;
var password;
var fs = require('fs');
var season;


function validateForm(event) {
  event.preventDefault()
  username = document.forms["credentials"]["username"].value;
  password = document.forms["credentials"]["password"].value;
  startDownload()
  if (username == "" || password == "") {
    return false;
  }
}


function startDownload() {
    const process = require('child_process');   // The power of Node.JS

    // var cmd = (is.windows()) ? `dotnet DepotDownloader.dll -app 359550 -depot 377237 -manifest 299124516841461614 -username ${username} -password ${password}  -remember-password -dir "Downloads/test" -validate -max-servers 15 -max-downloads 10` : './test.sh';      
    var cmd = (is.windows()) ? `echo ${username}` : './test.sh';      
    
    // console.log('cmd:', cmd);
        
    var child = process.exec(cmd); 


    child.stdout.on('data', function (data) {
      console.log(JSON.stringify(data.toString()));
      if(data.toString().startsWith("ancientkingg")){
        console.log("Hey you're username is mine!")
      }
    });
};

function selectedButton(clicked_src, clicked_class, clicked_element) {
  document.querySelectorAll('.selected').forEach(function(e) {
    e.className = "seasonbutton"
});
  if (clicked_element.style.transform === "scale(1.5)") {
    clicked_element.style.transform = "scale(1)";
    clicked_element.className = " seasonbutton";
    clicked_element.style.border = "0px solid black";
    clicked_element.style.borderRadius = "0px";
    clicked_element.style.backgroundColor = "transparent";
  } else {
    clicked_element.style.transform = "scale(1.5)";
    clicked_element.className += " selected";
    clicked_element.style.border = "3px solid green";
    clicked_element.style.borderRadius = "20px";
    clicked_element.style.backgroundColor = "green";
  }
  document.querySelectorAll('.seasonbutton:not(.selected)').forEach(function(e) {
      console.log(e);
      e.style.transform = "scale(1)";
      e.className = " seasonbutton";
      e.style.border = "0px solid black";
      e.style.borderRadius = "0px";
      e.style.backgroundColor = "transparent";
  });
  var str = clicked_src;
  str = str.substring(str.lastIndexOf("/") + 1);
  str = str.slice(0, -4);
}