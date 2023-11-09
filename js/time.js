function currentTime() {
    let date = new Date();
    let second = date.getSeconds();
    let Minute = date.getMinutes();
    let Hours = date.getHours();

    Hours = plustzero(Hours);
    Minute = plustzero(Minute);
    second = plustzero(second);
    document.getElementById("time").innerHTML = Hours + ":" + Minute + ":" + second;
    setTimeout(currentTime, 1000);
}
function plustzero(number) {
    if (number < 10){
        return "0" + number;
    }
    else return number;
}
currentTime();