// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Return the number (count) of vowels in the given string.

=== SOLUTION ===

function getCount(str) {
  // Basic summation --- start the value at 0.
  var vowelsCount = 0;
    // indicate a counter to iterate through the string and target certain values.
    for (var i = 0; i <= str.length; i++) {
    //if a vowel, add to vowel count
    // .charAt() - returns the character at the specified index in a string. Do for a,e,i,o,u
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      // If a vowel, add to the vowels count
      vowelsCount += 1;
      }
    }
  
  return vowelsCount;
}

=== TEST METHODS ===

describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});