// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

You are the developer working on a website which features a large counter on its homepage, proudly 
displaying the number of happy customers who have downloaded your companies software.
You have been tasked with adding an effect to this counter to make it more interesting.
Instead of just displaying the count value immediatley when the page loads, we want to create the 
effect of each digit cycling through its preceding numbers before stopping on the actual value.

Task:
As a step towards achieving this; you have decided to create a 'function' that will produce a multi-dimensional 
array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, 
and will include all numbers that come before it, going back to 0.

Rules:
The 'function' will take one argument which will be a four character string representing hit count
The 'function' must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number.

=== SOLUTION ===

function counterEffect(hitCount) {
// establish a variable for the overall counter amount for the number of downloads. 
// [] -- array, so it can change upon input.
 var counter = [];
 // iterate throught the original count to have a running total, to contrast with the
 // updated amount of downloads.
 for (var i = 0; i < hitCount.length; i++){
   // establish a new sub-array to store the new download amount that needs to be added
   // to the ongoing total.
   var newDownloadAmount = [];
     // iterate through this array, to have a running total of the new downloads.
     // "j" needs to be less than or equal to the number in which "i" returns from the 
     // iteration of the counter array (big picture array). 
     for (var j = 0; j <= Number(hitCount[i]); j++){
       // once the number ("j") of new dowloads is reached, push that number into the current
       // sub-array. (newDownloadAmount)
       newDownloadAmount.push(j);
     } 
     // To have a grand total, we need to push that number established from the sub-array
     // into the big picture array. 
     counter.push(newDownloadAmount);
 }
 // return counter (big picture array) -- with the newly added download amount.
 return counter;
}

=== TEST METHODS ===

Test.assertSimilar(counterEffect("1250"), [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]);
Test.assertSimilar(counterEffect("0050"), [[0],[0],[0,1,2,3,4,5],[0]]);
Test.assertSimilar(counterEffect("0000"), [[0],[0],[0],[0]]);


