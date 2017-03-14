// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Write a "function" to greet a person. Function will take name as input and greet the person 
by saying hello. Return null/nil if input is empty string or null/nil.

=== SOLUTION ===

function greet(name) {
  var helloPerson = "hello " + name + "!";
  if (name === "") {
  return null;
  } else {
  return helloPerson;
  }
}


=== TEST METHODS ===

Test.assertEquals(greet("Niks"), "hello Niks!", "try again");
Test.assertEquals(greet(null), null, "try again");