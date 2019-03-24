// --------------Challenge--------------------
//  We'll pass you an array of two numbers.
//  Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  // value will hold the total sum of two numbers
  let sum = 0;
  // we need to determine which value is smallest and biggest
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log('MAX = ', max);
  console.log('MIN = ', min);
  // start loopin from minimum to maximum number and sum them up
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  // return the sum
  return sum;
}
// ----------------Tests---------------
console.log(sumAll([1, 4])); //should return a number.
console.log(sumAll([1, 4])); //should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.
