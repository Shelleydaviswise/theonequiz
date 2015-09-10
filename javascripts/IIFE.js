
// IIFE
// Immediately invoked function expression
var fruitMaker = (function() {
  var fruitList = ["apples", "bananas", "cherries", "huckleberries"];

  return {

    addFruit: function(fruit) {
      fruitList.push(fruit);
    },

    getFruits: function() {
      return fruitList;
    }
  };
})();

fruitMaker.addFruit("lemons");
console.log("All the Fruits", fruitMaker.getFruits());


fruitMaker();