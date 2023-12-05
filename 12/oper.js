const add = (a,b) =>{
  return a+b;
}
const sub = (a,b) =>{
  return a-b;
}

const name ="samyak";


module.exports.add= add;       // made add function public so that others can access it
module.exports.sub= sub;   
module.exports.name= name;


// doing this together in 1
module.exports = {add,sub,name};
