const form = document.getElementById("loginForm");
        const errorMsg = document.getElementById("errorMsg");
        const togglePassword = document.getElementById("togglePassword");
        const passwordInput = document.getElementById("password");

        // Form submission & validation handler
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const role = document.getElementById("role").value;
            const email = document.getElementById("email").value.trim();
            const password = passwordInput.value.trim();

            // Strict Email Validation Regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMsg.textContent = "Please enter a valid email address end with .com, .in";
                return;
            }

            // Password length validation
            if (password.length < 6) {
                errorMsg.textContent = "Password must be at least 6 characters long.";
                return;
            }

            if (role === "") {
                errorMsg.textContent = "Please select a role.";
                return;
            }

            errorMsg.textContent = "";

            // Role-based routing simulation
            if (role === "admin") {
                window.location.href = "admin.html"; 
            } else if (role === "user") {
                window.location.href = "user.html";  
            }
        });
            