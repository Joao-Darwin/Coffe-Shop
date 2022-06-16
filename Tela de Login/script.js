const email = window.document.querySelector("#email");

function teste() {
    if (email.value == "") {
        email.style.border = "#000000"
    } else {
        console.log(typeof (email.value));
    }
}
console.log()