var is = require("electron-is");
function appendOutput(msg) { getCommandOutput().value += (msg+'\n'); };
function setStatus(msg)    { getStatus().innerHTML = msg; };

function showOS() {
    if (is.windows())
      appendOutput("Windows Detected.")
    if (is.macOS())
      appendOutput("Apple OS Detected.")
    if (is.linux())
      appendOutput("Linux Detected.")
}

function backgroundProcess() {
    const process = require('child_process');   // The power of Node.JS

    showOS();
    var cmd = (is.windows()) ? 'dotnet DepotDownloader.dll -app 359550 -depot 377237 -manifest 299124516841461614 -username ancientkinggg -password WitBrood12#  -remember-password -dir "Downloads/test" -validate -max-servers 15 -max-downloads 10' : './test.sh';      
    console.log('cmd:', cmd);
        
    var child = process.exec(cmd); 


    child.on('error', function(err) {
      appendOutput('stderr: <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      console.log(JSON.stringify(data.toString()));
      if(data.toString().startsWith("This account is protected by Steam Guard.")){
        console.log('say hi')
        child.stdin.write(prompt("gimme 2fa token noooow!"));
        console.log('say test')
      }
      appendOutput(data);
    });

    child.stderr.on('data', function (data) {
      appendOutput('stderr: <'+data+'>' );
    });

    child.on('close', function (code) {
        if (code == 0)
          setStatus('child process complete.');
        else
          setStatus('child process exited with code ' + code);

        getCommandOutput().style.background = "DarkGray";
    });
};