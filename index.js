//                       creating a new file


//              if file is not there, it will be created automatically
const { log } = require("console");
const fs= require("fs");

fs.writeFileSync('filename.txt',"this is the data we will add in the file")


// if we will run below command only, then it will override the previous data in the file
// fs.writeFileSync('filename.txt',"this is the  second data we will add in the file");


// to no override previous data from the file
// fs.appendFileSync('filename.txt',"\n hey, it will not override previous data");



// node.js includes an additional data type called Buffer
// Buffer is mainly used to store binary data
// while reading from a file or recieving packets over the network
// const buf_data= fs.readFileSync("filename.txt");
// console.log(buf_data);


// to retrieve original data from buffer
// org_data= buf_data.toString();
// console.log(org_data);



// rename the file name
// fs.renameSync('filename.txt','newfilename.txt');