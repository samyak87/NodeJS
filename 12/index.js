//                                      exporting our own modules

// const addd = require('./oper');

// console.log(addd.add(1,2)); 
// console.log(addd.sub(1,2));
// console.log(addd.name);


const {add,sub,name}= require('./oper');        // can pass the objects directly so that we don't need to call addd.add or something
// now we can call directly

console.log(add(1,2));
console.log(sub(1,2));
console.log(name);