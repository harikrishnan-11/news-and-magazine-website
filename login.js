const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

// Load saved email when page opens
window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("userEmail");

    // Prevent [object HTMLInputElement] from appearing
    if (
        savedEmail &&
        savedEmail !== "[object HTMLInputElement]"
    ) {
        emailInput.value = savedEmail;
    } else {
        localStorage.removeItem("userEmail");
    }
});

// Show / Hide Password
if (togglePassword) {
    togglePassword.addEventListener("click", () => {
        const type =
            passwordInput.type === "password"
                ? "text"
                : "password";

        passwordInput.type = type;

        togglePassword.innerHTML =
            type === "password"
                ? '<i class="fa-solid fa-eye"></i>'
                : '<i class="fa-solid fa-eye-slash"></i>';
    });
}

// Form Submission
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const role = document.getElementById("role").value;
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear previous error
        errorMsg.textContent = "";

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
        if (!role) {
            errorMsg.textContent = "Please select a role.";
            return;
        }

        // Save user data
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", role);
        localStorage.setItem(
            "loginTime",
            new Date().toLocaleString()
        );

        // Redirect based on role
        if (role === "admin") {
            window.location.href = "admin.html";
        } else if (role === "user") {
            window.location.href = "user.html";
        }
    });
}