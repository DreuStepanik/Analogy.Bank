// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Write a 'function' called repeatStr which repeats the given string string exactly n times.

=== SOLUTION ===

function repeatStr (n, s) {
  // use the .repeat() method to return the solution (n) number of times.
  return s.repeat(n);
}

=== TEST METHODS ===

describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});