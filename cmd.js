var is = require("electron-is");
function setStatus(msg)    { getStatus().innerHTML = msg; };
var username;
var password;


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