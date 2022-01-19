var randomNumber = Math.floor(Math.random() * 8);  // losujemy liczbę w którym kierunku ma się poruszyć kura
//var directionMove = ["stop();", "topMove()", "topRight()", "right()", "bottomRight()", "bottom()", "bottomLeft()", "left()", "topLeft()"];

var element = document.querySelector("#chicken");
var style = getComputedStyle(element);
var leftPos = style.left;
var topPos = style.top;
console.log(leftPos + " " + topPos);
var stdMove = "25px";
var resultMoveLeft = leftPos + stdMove;
var resultMoveTop = topPos + stdMove;
console.log(resultMoveLeft);
move(randomNumber);

function move(randomNumber) {
    if (randomNumber === 0) {
        stop();
    } else if (randomNumber === 1) {
        topMove();
    } else if (randomNumber === 2) {
        topRight();
    } else if (randomNumber === 3) {
        right();
    } else if (randomNumber === 4) {
        bottomRight();
    } else if (randomNumber === 5) {
        bottom();
    } else if (randomNumber === 6) {
        bottomLeft();
    } else if (randomNumber === 7) {
        left();
    } else if (randomNumber === 8) {
        topLeft();
    }
}

function stop(resultMoveLeft) {
    console.log("Kurczak zatrzymał się w miejscu");
}

function topMove(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 1");
    document.getElementById("chicken").style.left = resultMoveLeft;

}

function topRight(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 2");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function right(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 3");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function bottomRight(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 4");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function bottom(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 5");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function bottomLeft(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 6");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function left(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 7");
    document.getElementById("chicken").style.left = resultMoveLeft;
}

function topLeft(resultMoveLeft) {
    console.log(resultMoveLeft);
    console.log("Kurczak idzie w 8");
    document.getElementById("chicken").style.left = resultMoveLeft;
}
