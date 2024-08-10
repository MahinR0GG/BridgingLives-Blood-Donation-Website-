document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        // Validate empty fields
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
            return;
        }
    });

    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye-slash");
    });
});
