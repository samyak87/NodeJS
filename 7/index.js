const fs= require("fs");

// fs.writeFile('ab.txt',"hey",(err)=>{
//   console.log("file is created");
//   console.log(err);
// });





// (utf-8) work is to convert buffer data to string
fs.readFile('ab.txt',"utf-8",(err,data)=>{
    console.log(data);
})