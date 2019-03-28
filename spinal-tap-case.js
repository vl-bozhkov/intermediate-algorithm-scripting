// --------------Challenge--------------------
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // regex contains the regular expression /\s+|_+/g,
  // which will select all white spaces and underscores.
  var regex = /\s+|_+/g;

  //  puts a space before any encountered uppercase characters in the string
  // str so that the spaces can be replaced by dashes later on.
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // This replace call replaces the match of the regex (which happens
  // to match everything) with the first capture group ($1) followed by
  // a comma, followed by the second capture group ($2)
  // replaces spaces and underscores with dashes using regex.
  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
// ----------------Tests---------------
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
