const form = document.getElementById("newsletter");
const email = document.getElementById("newsLetterEmail");
const error = document.getElementById("emailError");

form.addEventListener("submit", (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

    if (!regex.test(email.value.trim())) {
        e.preventDefault();
        error.textContent = "Email must end with .com or .in";
        error.style.color = "red";
    } else {
        error.textContent = "";
    }
});