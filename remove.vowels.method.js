// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Your task is to write a 'function' that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

=== SOLUTION ===

function disemvowel(str) {
  // .replace( / -- replace
  //     /(this in between)/ -- is what to replace
  //     gi -- global, insensitive (ignores A + a)
  // )
  return str.replace(/[aeiou]/gi, '');;
}

=== TEST METHODS ===

Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")