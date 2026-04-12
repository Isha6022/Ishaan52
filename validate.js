document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent default form submission
        errorMsg.textContent = ''; // clear previous errors

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (username.length < 3) {
            errorMsg.textContent = "Username must be at least 3 characters long.";
            return;
        }

        if (!validateEmail(email)) {
            errorMsg.textContent = "Please enter a valid email address.";
            return;
        }

        if (password.length < 6) {
            errorMsg.textContent = "Password must be at least 6 characters long.";
            return;
        }

        if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match.";
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});