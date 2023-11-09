let tmpButton = false;
function buy() {
    if (tmpButton) {
        document.getElementById("btn").innerHTML = "Купить";
        document.getElementById("btn").style.background = "red";
        tmpButton = false;
    }
    else {
        document.getElementById("btn").innerHTML = "В корзине";
        document.getElementById("btn").style.background = "green";
        tmpButton = true;
    }
}