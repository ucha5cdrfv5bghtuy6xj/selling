const nav = document.querySelector(".nav")
const footer = document.querySelector(".footer")
const navlist = document.querySelectorAll(".nav_list")
if (localStorage.getItem("bg-color") !== null) {

    nav.style.background = localStorage.getItem("bg-color");
    footer.style.background = localStorage.getItem("bg-color");
    navlist.forEach(el => {
        el.style.color = localStorage.getItem("text-color");
    })
}
function white() {
    console.log("white");
    nav.style.background = "wheat";
    footer.style.background = "wheat";
    nav.style.transition = "1s";
    footer.style.transition = "1s";
    localStorage.setItem("bg-color", "wheat");
    navlist.forEach(el => {
        el.style.color = "black";
        el.style.transition = "1s";
    })
    localStorage.setItem("text-color", "black");
}
function black() {
    console.log("black");
    nav.style.background = "black";
    footer.style.background = "black";
    nav.style.transition = "1s";
    footer.style.transition = "1s";
    localStorage.setItem("bg-color", "black");
    navlist.forEach(el => {
        el.style.color = "white";
        el.style.transition = "1s";
    })
    localStorage.setItem("text-color", "white");
}