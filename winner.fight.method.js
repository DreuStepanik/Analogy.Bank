// // // // // // // // // // // // // // // // // 
ANALOGY EXAMPLE
// // // // // // // // // // // // // // // // // 

Create a 'function'that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter 'class' below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

=== SOLUTION ===

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  // Declare attackers to be used within loops.
  var firstAttacker;
  var secondAttacker;
  
  // If the First attacker is the name of Fighter 1.. then he is fighter1
  if (firstAttacker === fighter1.name) { 
    
      firstAttacker = fighter1;
      secondAttacker = fighter2;    
  }
  // Visa Versa
  else { 
    
      firstAttacker = fighter2;
      secondAttacker = fighter1;  
  }
      // Use ( while ) to signify that the fight will continue while both fighters still have health.
      while (fighter1.health > 0 && fighter2.health > 0) {
        
          // Expression to represent that after each attack, the Fighters health will decrease. 
          // ( -= : represents subtracting a value from the previous result ) 
          secondAttacker.health -= firstAttacker.damagePerAttack;
        
          // If the health of one fighter reaches or surpasses 0, then the fighter is dead.
          // The name of the standing fighter will be declared winner and will be displayed.
          if (secondAttacker.health <= 0 ) {
            return firstAttacker.name;
          }
          
          // Expression to represent that after each attack, the Fighters health will decrease. 
          // ( -= : represents subtracting a value from the previous result )
          firstAttacker.health -= secondAttacker.damagePerAttack;
           
          // If the health of one fighter reaches or surpasses 0, then the fighter is dead.
          // The name of the standing fighter will be declared winner and will be displayed.
          if (firstAttacker.health <= 0) {
            return secondAttacker.name;
          }
      
      }    
}

=== TEST METHODS ===

Test.describe("Example Test Cases", function(){
  
  Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

  Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

  Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

  Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

  Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
    
  Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

});