function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var player1Number = "./images/dice" + rand(1, 6) + ".png";
var player2Number = "./images/dice" + rand(1, 6) + ".png";

if (player1Number > player2Number) {
    document.getElementById("instruction").innerHTML = "🎈 Play1 is Win"
} else if (player1Number < player2Number) {
    document.getElementById("instruction").innerHTML = "Play2 is Win 🎈"
} else {
    document.getElementById("instruction").innerHTML = "draw"
}

var img1 = document.getElementsByClassName("img1")[0].setAttribute("src", player1Number);
var img2 = document.getElementsByClassName("img2")[0].setAttribute('src', player2Number);