let numOfNumbers;
let generatedNumbers;
let randomNumberElement;
let minNumber = 0;
let maxNumber = 10;
let printTime = 1;
let maxSum = 100;
let currentSum = 0;

function startGeneratingNumbers() {
  numOfNumbers = document.getElementById("num-of-numbers").value;
  minNumber = parseInt(document.getElementById("min-number").value);
  maxNumber = parseInt(document.getElementById("max-number").value);
  printTime = parseFloat(document.getElementById("print-time").value);
 // maxSum = parseFloat(document.getElementById("max-live-sum").value);
  const selectElement = document.getElementById("semn");
  const selectedOption = selectElement.value;
  generatedNumbers = 0;
  currentSum = 0;
  randomNumberElement = document.getElementById("random-numbers");
  randomNumberElement.innerHTML = " ";
  rescheck = document.getElementById("rescheck");
  rescheck.innerHTML = " ";
  generateRandomNumber();
}



function generateRandomNumber() {
  if (generatedNumbers < numOfNumbers) {
    
   /* setTimeout(() => {
      randomNumberElement.innerHTML = "‎";
    }, (500));*/
    
    let randomNumber;
    const selectedSign = document.getElementById("semn").value;
    if (selectedSign === "+") {
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      currentSum += randomNumber;
      randomNumberElement.innerHTML = "+" + randomNumber;
    } else if (selectedSign === "+/-") {
      const isPositive = Math.random() < 0.5;
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      console.log("isPositive", isPositive, "randomNumber", randomNumber, "currentSum", currentSum);
      if (isPositive && (currentSum - randomNumber >= 0)) {
        currentSum -= randomNumber;
        randomNumberElement.innerHTML = "-" + randomNumber;
      } else {
        currentSum += randomNumber;
        randomNumberElement.innerHTML = "+" + randomNumber;
      }
      console.log("new currentSum", currentSum);
    }

    //document.getElementById("rescheck").innerHTML = "Live sum is: " + currentSum
    generatedNumbers++;
    if (generatedNumbers % 2 == 0)
      randomNumberElement.style.color = "black";
    else
      randomNumberElement.style.color = "turquoise";
    setTimeout(generateRandomNumber, printTime * 1000 + 500);
  }
}




function checkResult() {
  let result = parseInt(document.getElementById("result-input").value);
  if (result === currentSum) {
    document.getElementById("rescheck").innerHTML = "Correct!";
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    document.getElementById("rescheck").innerHTML = "Wrong! Correct sum is: " + currentSum;
  }
}