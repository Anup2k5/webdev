let password = document.getElementById("password");
let message = document.getElementById("message");

password.addEventListener("input", function () {
    if (password.value.length < 8) {
        message.textContent = "Too Short";
        message.style.color = "red";
    } else {
        message.textContent = "Strong Enough";
        message.style.color = "green";
    }
});