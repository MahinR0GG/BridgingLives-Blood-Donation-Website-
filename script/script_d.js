document.addEventListener("DOMContentLoaded", function() {
    // Function to validate form fields
    function validateForm() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var district = document.getElementById("district").value;
        var dob = document.getElementById("dob").value;
        var bloodType = document.getElementById("bloodType").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var townCity = document.getElementById("townCity").value;

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password.length < 8 ||
            district === "" ||
            dob === "" ||
            bloodType === "" ||
            phoneNumber.length !== 10 ||
            townCity === ""
        ) {
            if (firstName === "" ||
                lastName === "" ||
                email === "" ||
                district === "" ||
                dob === "" ||
                bloodType === "" ||
                townCity === "") {
                alert("Please fill in all required fields.");
            }
            if (password.length < 8) {
                alert("Password must be at least 8 characters.");
            }
            if (phoneNumber.length !== 10) {
                alert("Phone number must be 10 digits.");
            }
            return false;
        }

        // Additional validation if needed

        return true;
    }

    // Event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        // Validate form fields before submission
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Event listener for bloodType change
    document.getElementById('bloodType').addEventListener('change', function() {
        if (this.value === 'other') {
            document.getElementById('otherBloodType').style.display = 'block';
            document.getElementById('otherBloodType').setAttribute('required', 'required');
        } else {
            document.getElementById('otherBloodType').style.display = 'none';
            document.getElementById('otherBloodType').removeAttribute('required');
        }
    });

    // Event listener for password toggle
    const togglePasswordButton = document.querySelector('.toggle-password');
    togglePasswordButton.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the eye icon
        if (type === 'password') {
            togglePasswordButton.classList.remove('fa-eye-slash');
            togglePasswordButton.classList.add('fa-eye');
        } else {
            togglePasswordButton.classList.remove('fa-eye');
            togglePasswordButton.classList.add('fa-eye-slash');
        }
    });
});
