myArray = process.argv;
var sum=0;
for (var i=2; i < myArray.length;i++){
	sum += Number(myArray[i]);
}
console.log (sum);