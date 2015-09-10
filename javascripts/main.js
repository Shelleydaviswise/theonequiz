
// vanilla javascript
document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";
// jQuery
$("#jquery_output").text("This content generated with jQuery");

// Modulus function
function modulus(num1, num2) {
  var remainder = num1 % num2;
  console.log("modulus", remainder)
}
modulus(11,5);

// doMath function
function add(a, b) {
  var sum = a+b;
  return sum;
}

function subtract(c,d) {
  var difference = c -d;
  return difference;
}

function doMath (val1, val2, math) {
   return math(val1, val2);
  };

var add = doMath(4, 10, add);
console.log("doMath add", add);

var subtract = doMath(20,4,subtract);
console.log("doMath subtract", subtract);



// Arrays
var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var planetString= "";
var planetArray = [];

// sorted Planets function
function sortedPlanets() {
  return Planets.sort();
};
 var x = sortedPlanets(Planets);
 console.log("sorted planets", x);

// reversed Planets function
function reversedPlanets () {
  planetString = Planets.toString();
  return planetString.split('').reverse().join('');
}
var newString = reversedPlanets(Planets);
var newArray = newString.split(',');
console.log("Reversed Planets", newArray);

 // long Planets function
function longPlanets(element, index, array) {
  if (element.length >= 7) {
    return element;
  }
};
var filteredPlanets = Planets.filter(longPlanets);
console.log("Filtered Planets", filteredPlanets);


// Animals Array
$(document).ready(function(){

  $.ajax({
    url: "./data/animals.json"
  }).done(function(data) {

   var myAnimalsArray = data.animals;
   var animalArray= [];

   for (var i =0; i < myAnimalsArray.length; i++){
        animalArray.push(myAnimalsArray[i].type);
    };
     console.log("My Animals Array", animalArray);
  });
});
