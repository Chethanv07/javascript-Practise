
var value = document.querySelector(".value");
var alertness = document.querySelector(".alterness");
var addbutton = document.querySelector(".adding");
function add() {
    value.innerHTML = "Hello world";
    alertness.innerHTML = " ";
}
function remove() {
    if (value.innerHTML == " ") {
        alertness.innerHTML = "Nothing to remove";

    }
    else {


        value.innerHTML = " "
    }
}
document.querySelector(".adding").addEventListener("click", add);
document.querySelector(".removeing").addEventListener("click", remove);


