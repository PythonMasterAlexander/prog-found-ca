//Questio 1
for (var i = 15; i <= 25; i++) {
  if (i % 2 !== 1) {
    console.log("Even numbers : " + i);
  }
}

//Question 2 
function logStringSentence() {
  console.log("I am a function");
}

var innerFunction = logStringSentence;

function outerFunction(outputLogStringSentence) {
  outputLogStringSentence();
}

outerFunction(innerFunction);

