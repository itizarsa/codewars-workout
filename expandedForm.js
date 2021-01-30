/*
You will be given a number and you will need to return it as a string in Expanded Form. 

Example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

var expandedForm = (num) => {
	var arr = num.toString().split("").reverse();
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		arr[i] == 0 ? result.push() : result.push(arr[i] + "0".repeat(i));
	}
	return result.reverse().join(" + ");
};
