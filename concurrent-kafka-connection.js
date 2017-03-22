const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<300; i++) {
    console.log("Fork process count :", i)
    var worker_process = child_process.fork("producer-client.js", [i]);	

   worker_process.on('close', function (code) {
       worker_process.kill("SIGINT");
        worker_process.exit(0)
      console.log('child process exited with code ' + code);
   });
}