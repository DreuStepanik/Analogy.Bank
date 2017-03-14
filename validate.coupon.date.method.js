// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system 
by entering invalid codes or using expired coupons.
Your mission: 
Write a 'function' called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

=== SOLUTION ===

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // entered code == user input
  // correct code == correct coupon code in the system at the time
  // date.parse() == parses a date string and returns the number of milliseconds between 
  //                 the date string and midnight of January 1, 1970.
  // declare that the expirationDate needs to be a higher millisecond amount than the currentDate
  // to ensure that the coupon is still within the valid time frame.
  if ( enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate) ) {
    // If all is correct, return true.
    return true;
  } else {
  // If one or more sections are incorrect, return false and stop the sequence.
  return false;
  }
}

=== TEST METHOD ===

Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);