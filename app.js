var num = prompt("Enter a positive number:");
num = Number(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + - "<br>");
document.write("Ceil value: " + Math.ceil(num));

var num = prompt("Enter a negative floating point number:");
num = Number(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

var num = prompt("Enter a number:");
num = Number(num);

document.write("The absolute value of " + num + " is " + Math.abs(num));

var toss = Math.floor(Math.random() * 2);

if (toss === 0) {
    document.write("Random Coin Value: Heads");
} else {
    document.write("Random Coin Value: Tails");
}

var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random Number: " + randomNum);

var weightInput = prompt("Enter your weight:");
var weight = parseFloat(weightInput);

document.write("Your weight is " + weight + " kilograms");

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Guess a number between 1 and 10:");
userGuess = Number(userGuess);

if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
} else {
    document.write("Sorry! The secret number was " + secretNumber);
}