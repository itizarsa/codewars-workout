/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

Sample Tests :

Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

*/

function alphabetPosition(text) {
	let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = "";

	for (let i = 0; i < text.length; i++) {
		if (text[i].match(/[a-z]/i)) {
			let upper = text[i].toUpperCase();
			let code = alpha.indexOf(upper);
			result += code + " ";
		}
	}

	return result.trim();
}
