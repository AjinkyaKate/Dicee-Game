// Function to roll the dice
function rollTheDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png- dice6.png
    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);






    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "✌Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "✌Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "DRAW!";
    }

    // //if player 1 wins
    // if (randomNumber1 > randomNumber2) {
    //     document.querySelector("h1").innerHTML = ("✌" + player1 + " Wins!");
    // } else if (randomNumber2 > randomNumber1) {
    //     document.querySelector("h1").innerHTML = ("✌" + player2 + " Wins!");
    // } else {
    //     document.querySelector("h1").innerHTML = "DRAW!";
    // }



}
// Function to change the player name
function editNames() {
    var player1 = prompt("Change Player1 name");
    var player2 = prompt("Change player2 name");

    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}