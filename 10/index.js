const os =require("os");

// const data= os.arch();          // tells about architecture (mine is x64)
// const data =os.cpus();             // tells about cpu system
const data = os.platform();
// const data=os.networkInterfaces()
// const data = os.freemem();               // amount of free memory(RAM) in bytes
// const data = os.totalmem();             // amount of total memory(RAM) in bytes4
// console.log(data/1024/1024/1024);


console.log(data);