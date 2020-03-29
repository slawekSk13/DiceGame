

function getRandomNumber() {
  var randomNumber = (Math.floor(Math.random()*6)+1);
  return randomNumber;
}
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

var player1 = prompt("Player's 1 name:");
var player2 = prompt("Player's 2 name:");


document.querySelectorAll("p")[0].innerText = player1;
document.querySelectorAll("p")[1].innerText = player2;

// var randomImage1 = "dice" + randomNumber1 + ".png";
// var randomImageSource1 = "images/" + randomImage1;
//
//
// var image1 = document.querySelector(".img1");
//
// image1.setAttribute("src", randomImageSource1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if(randomNumber1==randomNumber2) {
  document.querySelector("h1").innerText = "It's a DRAW! Roll the dices again";
} else if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> " + player1 + " Wins!!!";
} else {
  document.querySelector("h1").innerHTML = player2 + " Wins!!! <i class='fas fa-flag'></i>";
}
