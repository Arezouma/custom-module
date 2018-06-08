function setDifference(ar1, ar2) {
	
	return ar1.concat(ar2).filter(function(val, index, arr){
		return arr.indexOf(val) === arr.lastIndexOf(val);
	});
	
};
module.exports = setDifference;