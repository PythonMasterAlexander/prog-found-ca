//Question 1
var firstName = "Alexander"; 

//Question 2 
var person = {
  age: 32,
  male: true
}

//Question 3
var outOfStock = true;

if (outOfStock) {
  console.log("Out of stock");

} else {
  console.log("In stock");
}

//Or
if (!outOfStock) {
  console.log("In stock");
  
} else {
  console.log("Out of stock");
}

//Question 4
var arrayOfFiveNumbers = [666, 555, 0, 4, 100];

for (var i = 0; i < arrayOfFiveNumbers.length; i++) {
  var numbersInArray = arrayOfFiveNumbers[i];

  console.log(numbersInArray);
}

//Or 

for (var i = 0; i < arrayOfFiveNumbers.length; i++) {
  console.log(arrayOfFiveNumbers[i]);
}

//Question 5  
for (var i = 15; i <= 25; i++) {
  console.log("Counter Variable : " + i);
}

//Question 6 
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//Question 7  
var arrayOfCarObjects = [
  {
    brand: "toyota",
    model: 2007,
    classic: false
  },

  {
    brand: "ford",
    model: 1959,
    classic: true
  }
]

for (var i = 0; i < arrayOfCarObjects.length; i++) {
  var modelKeyValue = arrayOfCarObjects[i].model;
  var classicKeyValue = arrayOfCarObjects[i].classic;

  console.log(modelKeyValue + ":" + " " + classicKeyValue);
}

//Or
for (var i = 0; i < arrayOfCarObjects.length; i++) {
  console.log(arrayOfCarObjects[i].model + ":" + " " + arrayOfCarObjects[i].classic);
}


//Question 8 
function whatIDontLike (valueOfWhatIDontLike) {
  var returnString = "I dont't like" + " " + valueOfWhatIDontLike;

  console.log(returnString);
}

whatIDontLike("snakes");

//Question 9 
function subtractingNumbers (firstNumber, secondNumber) {
  var subtractedNumber = firstNumber - secondNumber;

  console.log(subtractedNumber);
}

subtractingNumbers(2000, 5000);

//OR
function subtractingNumbers (firstNumber, secondNumber) {
  console.log(firstNumber - secondNumber);
}

subtractingNumbers(100, 1000);

//Question 10 
var anArray = [];

function insertValueIntoAnArray (value) {
  anArray.push(value);
  
  for (var i = 0; i < anArray.length; i++) {
    return anArray[i];
  }
}

var returnValueInanArray = insertValueIntoAnArray(null);

console.log(returnValueInanArray);
