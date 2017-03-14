// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

You get an array of numbers, return the sum of all of the positives ones.

=== SOLUTION ===

function positiveSum(arr) {
  // establish a separate array to store the negative numbers
  var negativeNumbers = [];
  // sum always begins at 0 to get an accurate total
  var sum = 0;
  // itterate through the code. index value begins at the start(0). increases until the length of the array(arr)
  for (var i = 0; i<arr.length; i++) {
    // if that index value palce, number, is less than 0 then..
    if(arr[i] < 0){
      // push that negative number to the previously stated array to only allow positive numbers to add to the sum
      negativeNumbers.push(arr[i]);
    } else {
    // add the positive numbers.
      sum += arr[i];
    }
  }
  // booooom shocka locka
  return sum;
}

=== TEST METHODS ===

Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);

