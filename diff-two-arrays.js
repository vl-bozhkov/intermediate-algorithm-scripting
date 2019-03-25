// --------------Challenge--------------------
//  Compare two arrays and return a new array with any items only found
//  in one of the two given arrays, but not both.
//  In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  //define new array
  var newArr = [];
  // Same, same; but different.
  function unique(first, second) {
    //loop through array and find unique value
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  //we have to do it for both arrays
  //because arrays can have different sizes
  unique(arr1, arr2);
  unique(arr2, arr1);
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// ----------------Tests---------------
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //should return an array. [4]
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
