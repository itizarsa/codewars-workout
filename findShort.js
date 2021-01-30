/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
	let sep = s.split(" ");
	let sepLen = sep.length;
	let length = sep[0].length;

	for (i = 1; i < sepLen; i++) {
		if (sep[i].length < length) {
			length = sep[i].length;
		}
	}
	return length;
}
