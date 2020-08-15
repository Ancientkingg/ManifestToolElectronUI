const cp = require('child_process')

const exec = cp.exec('dotnet DepotDownloader.dll -app 359550 -depot 377237 -manifest 299124516841461614 -username ancientkinggg -remember-password -dir "Downloads/test" -validate -max-servers 15 -max-downloads 10')

exec.stdout.pipe (process.stdout) 
process.stdin.pipe (exec.stdin) 

