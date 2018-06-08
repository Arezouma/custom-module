function printNumber() {
	for (var i = 0; i < 101; i++){
		console.log(i);
	}
};
module.exports = printNumber;
function printPrime(){
	for (var i = 2; 0 < 101; i++){
		var x  = false;
		for (var j = 2; j < i; j++){
			if (101%i === 0 && i!== 101){
				x = true;
			}
			if (x === false){
				console.log(x);
			}
		}
	}
}
module.exports = printPrime;