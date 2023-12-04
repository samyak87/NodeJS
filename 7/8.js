const { log } = require("console");
const fs= require("fs");

// const data= fs.readFileSync("ab.txt","utf-8");
// console.log(data);
// console.log("after the data");




const dataAsync= fs.readFile("ab.txt","utf-8",(err,data)=>{
  console.log(data);
})
console.log("after async data"); 
 // this will print first and will not wait for the fetching of data from the file
 

