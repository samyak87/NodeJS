const path = require("path");

console.log(path.dirname('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js'));
console.log(path.extname('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js'));
console.log(path.basename('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js'));


// tells all the objects related to path, i.e. above all which I executed
console.log(path.parse('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js'));


console.log(path.parse('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js').name);
console.log(path.parse('C:/Users/Samyak Jain/Desktop/DSA/programming/C++ programs/webd/Nodejs/11/index.js').base);

