// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

=== SOLUTION ===

var summation = function (num) {
  var sumOfSubNumbers = 0;
  // by default 0 would equate to null, so start at 1.
  // i <= num. NOT num.length. The actual number itself.
  // will keep increasing in incriments until the number is reached.
  for (var i = 1; i <= num; i++) {
    // 1 , 2, 3, 4 -- (1) .. (1 + 2) .. (1 + 2 + 3).. so forth.
    sumOfSubNumbers += i;
  }
  return sumOfSubNumbers;
}

=== TEST METHODS ===

describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})