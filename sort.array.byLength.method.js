// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Write a 'function' that takes an array of strings as an argument and returns a 
sorted array containing the same strings, ordered from shortest to longest.

=== SOLUTION ===

function sortByLength (array) {
  // return the array, with an attached sort method.
  // .sort( (function, paramaters) => " ".length - " ".length ) from a to b. low to high.
  // => simply returns the arguement that was passed through.
  return array.sort((short, long) => short.length - long.length);
};

=== TEST METHOD ===	

Test.describe("Example tests",function(){
  Test.it("Test 1",function(){
    Test.assertSimilar(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  Test.it("Test 2",function(){
    Test.assertSimilar(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  Test.it("Test 3",function(){
    Test.assertSimilar(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
});