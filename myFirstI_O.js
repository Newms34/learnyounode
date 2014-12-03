var fs = require('fs');
var myFile = fs.readFileSync(process.argv[2]);
myFile = myFile.toString();
var myFileArr = myFile.split('\n').length-1;
console.log (myFileArr); //Arr!