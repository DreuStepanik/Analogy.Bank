// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

ex. { 6, 2, 1, 8, 10 } => 16
	{ 1, 1, 11, 2, 3 } => 6

=== SOLUTION ===

function sumArray(array) {
  // write a statement to catch an empty array.Return 0.
    if (array == null)
    {
        return 0;
    }
    // write a statement to catch an array with a length of 2, as one number will indicate a high, and
    // one will indicate a low.
    else if (array.length < 2)
    {
        return 0;
    }
    else
    {
      // .sort(function(a, b){return a - b}) == represents returning in ascending order.
        array = array.sort(function(a,b) {return a - b;});
        // start the total at 0, since you will need to add specifics.
        var total = 0;
        // start the counter at [1], to skip over the lowest number [0] 
        // count until the array.length -1, to skip out on the highest number.
        for (var i = 1; i < array.length - 1; i++) {
            // keep adding the numbers to the total, for summation.
            total += array[i];
        }
        return total;
    }
}

=== TEST METHODS ===

Test.assertEquals(sumArray([ 6, 2, 1, 8, 10 ]), 16);