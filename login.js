const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

// Load saved email when page opens
window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});

// Show / Hide Password
if (togglePassword) {
    togglePassword.addEventListener("click", () => {
        const type =
            passwordInput.getAttribute("type") === "password"
                ? "text"
                : "password";

        passwordInput.setAttribute("type", type);

        togglePassword.innerHTML =
            type === "password"
                ? '<i class="fa-solid fa-eye"></i>'
                : '<i class="fa-solid fa-eye-slash"></i>';
    });
}

// Form Submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in)$/i;

    if (!emailPattern.test(email)) {
        errorMsg.textContent =
            "Please enter a valid email address ending with .com or .in";
        return;
    }

    // Password Validation
    if (password.length < 6) {
        errorMsg.textContent =
            "Password must be at least 6 characters long.";
        return;
    }

    // Role Validation
    if (role === "") {
        errorMsg.textContent = "Please select a role.";
        return;
    }

    errorMsg.textContent = "";

    // Store User Data
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);

    // Optional Login Timestamp
    localStorage.setItem("loginTime", new Date().toLocaleString());

    // Redirect Based on Role
    if (role === "admin") {
        window.location.href = "admin.html";
    } else if (role === "user") {
        window.location.href = "user.html";
    }
});

// Save email only
localStorage.setItem("userEmail", email);