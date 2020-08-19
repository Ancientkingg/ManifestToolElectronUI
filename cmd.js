var is = require("electron-is");
function setStatus(msg)    { getStatus().innerHTML = msg; };
var x;


function validateForm(event) {
  event.preventDefault()
  x = document.forms["credentials"]["username"].value;
  const data = new FormData(event.Target)
  console.log(`Hello ${x}`)
  if (x == "") {
    return false;
  }
}

function TestCMD() {
  console.log(x)
}

function startDownload() {
    const process = require('child_process');   // The power of Node.JS

    var cmd = (is.windows()) ? 'dotnet DepotDownloader.dll -app 359550 -depot 377237 -manifest 299124516841461614 -username ancientkinggg -password WitBrood12#  -remember-password -dir "Downloads/test" -validate -max-servers 15 -max-downloads 10' : './test.sh';      
    console.log('cmd:', cmd);
        
    var child = process.exec(cmd); 


    child.stdout.on('data', function (data) {
      console.log(JSON.stringify(data.toString()));
      if(data.toString().startsWith("Unable to login to Steam3: RateLimitExceeded\r\n")){
        console.log('say hi')
        // child.stdin.write(prompt("gimme 2fa token noooow!"));
      }
    });
};