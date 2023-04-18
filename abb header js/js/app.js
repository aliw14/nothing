let glass = document.querySelector("#glass")
let inp = document.querySelector("#list input")

glass.onclick = function () {
    inp.classList.toggle('input')

}

let chevron = document.querySelector("#chevron")
let lang = document.querySelectorAll(".language")


let spone = document.querySelector("#sp-one");
let sptwo = document.querySelector("#sp-two");
let img1 = document.querySelector("#lang-one");
let img2 = document.querySelector("#lang-two");
let az = document.querySelector("#az");

let isShown = false;


az.addEventListener("click", function () {
    if (isShown) {
        spone.style.display = "none";
        sptwo.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "none";
        isShown = false;
    } else {
        spone.style.display = "block";
        sptwo.style.display = "block";
        img1.style.display = "block";
        img2.style.display = "block";
        isShown = true;
    }
});







