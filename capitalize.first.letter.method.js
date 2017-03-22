// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Using the JavaScript language, have the 'function' LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. Words will be separated by only one space. 

=== SOLUTION ===

function LetterCapitalize(str) { 

  // split the string to isolate each word.
   var splitString = str.toLowerCase().split(' ');
   // generate a counter to iterate through the string, to target each seperate word.
   for (var i = 0; i < splitString.length; i++) {
       // i represents the starting point of the seperate strings.
       // .charAt(0) method to isolate the first letter of each word.
       // attach the .toUpperCase() property to capitalize that specific letter at that position.
       // string.substring(start, end) --- in this instance, we are instructing the rule to start at positon 1, and continue.
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
   }
   // Last but not least, we will need to join the string to return the string as inputed.
   return splitString.join(' '); 
         
}
