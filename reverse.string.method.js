function reverse(str) {
// if the length or the string is 1, or if the string is null -- return the original string.
  if (str.length == 1 || str === '') {
    return str;
  } else {
    // The split() method is used to split a string into an array of substrings, and returns the new array.
    // The reverse() method is used to reverse order of elements in the array
    // The join() method is used to join the array back together.
    return str.split("").reverse().join("");
    }
}


=== TEST METHODS ===

describe("Solution", function(){
  it('should test for something', function(){
    Test.assertEquals(reverse('peter'), 'retep');
    Test.assertEquals(reverse('h'), 'h');
    Test.assertEquals(reverse('') , '');
  });
});