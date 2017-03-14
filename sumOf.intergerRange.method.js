// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Given two integers, which can be positive and negative, find the sum of all the numbers 
between including them too and return it. If both numbers are equal return a or b.

=== SOLUTION ===

function GetSum(a,b) {
  // declare the key variables min/max
  // Math.min() | Math.max() javascript functions
  let min = Math.min(a, b),
      max = Math.max(a, b);
      // The following is a basic math equation used to add the range of 2 intergers.
  return (max - min + 1) * (min + max) / 2;
}

=== TEST METHODS ===

Test.describe("Basic Tests:", function(){
       
        Test.assertEquals(GetSum(0,-1),-1);
        Test.assertEquals(GetSum(0,1),1);
        
});
