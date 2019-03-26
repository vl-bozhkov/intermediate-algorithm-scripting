// --------------Challenge--------------------
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  // Remove all the values
  //turn the argument of function to array
  var args = Array.prototype.slice.call(arguments);
  // turn arguments to array
  var arg = args.slice(1);
  console.log(args);
  // loop through array and each value that not in arguments return to newArr
  var newArr = args[0].filter(function(val) {
    if (arg.indexOf(val) == -1) {
      return true;
    }
    return false;
  });
  console.log(newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// ----------------Tests---------------
//   destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
