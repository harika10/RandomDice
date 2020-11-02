
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc1 = "dice" + randomNumber1 + ".png";
var randomImg1 = "images/" + randomImgSrc1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg1)


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "dice" + randomNumber2 + ".png";
var randomImg2 = "images/" + randomImgSrc2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2)

if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "&#128081 Player 1 wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Player 2 wins! &#128081";
}
