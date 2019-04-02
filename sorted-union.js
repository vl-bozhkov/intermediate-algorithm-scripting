// --------------Challenge--------------------
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// aracter and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function uniteUnique(arr) {
  // turn all passed parameters to array
  let args = Array.from(arguments);
  let newArr = [];
  //outer loop
  for (var i = 0; i < args.length; i++) {
    //inner loop to get each individual value
    for (var j = 0; j < args[i].length; j++) {
      //if value not in new array push it
      if (!newArr.includes(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  console.log('newArr = ', newArr);
  return newArr;
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// ----------------Tests---------------
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
