/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example :

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

function countSmileys(arr) {
	let count = 0;

	let smiley = [":-)", ":~)", ":-D", ":~D", ";-)", ";~)", ";-D", ";~D", ":)", ":D", ";)", ";D"];

	if (arr.length < 1) {
		return count;
	} else {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < smiley.length; j++) {
				if (arr[i] == smiley[j]) {
					count++;
					break;
				}
			}
		}
	}

	return count;
}
