//create a function called setIntersection
function setIntersection(ar1,ar2) {
	/*var newArray = [];
	for (var i = 0; i < ar1.length; i++){
		for(var j = 0; j < ar2.length; j++){
			if (ar1[i] === ar2[j]){
			   newArray.push(ar1[i]);
			}
		}
	}
	return newArray;*/
	var result = ar1.filter(function(n){
		return ar2.indexOf(n) > -1;
	});
	return result;


};
module.exports = setIntersection;