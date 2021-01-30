/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	let result = "";
	for (i = 0; i < s.length; i++) {
		let str = "";
		for (j = 0; j <= i; j++) {
			str += s[i];
		}

		result += str[0].toUpperCase() + str.slice(1).toLowerCase() + "-";
	}

	return result.slice(0, result.length - 1);
}
