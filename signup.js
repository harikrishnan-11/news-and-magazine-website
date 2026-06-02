 // Form Validation Script
        document.getElementById("signupForm").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const errorMsg = document.getElementById("errorMsg");
            const termsChecked = document.getElementById("terms").checked;
            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMsg.textContent = "Please enter a valid email address end with .com, .in";
                return;
            }
            // Format setup to match sign-in styling errors
            errorMsg.style.color = "red";
            errorMsg.style.textAlign = "center";
            errorMsg.style.marginTop = "10px";

            if (password.length < 6) {
                errorMsg.textContent = "Password must be at least 6 characters long.";
                return;
            }

            if (password !== confirmPassword) {
                errorMsg.textContent = "Passwords do not match!";
                return;
            }

            if (!termsChecked) {
                errorMsg.textContent = "You must agree to the terms and conditions.";
                return;
            }

            errorMsg.textContent = "";
            window.location.href = "./login.html";
        });
        