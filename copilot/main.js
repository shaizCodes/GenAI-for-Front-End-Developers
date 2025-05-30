// Generate a JavaScript function to toggle a dropdown menu
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('show');
    } else {
        console.error(`Dropdown with ID ${dropdownId} not found.`);
    }
}

// Form validation function
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        console.error(`Form with ID ${formId} not found.`);
        return false;
    }

    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

// Generate a function to validate an email address of format, xxx@iba-suk.edu.pk
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@iba-suk\.edu\.pk$/;
    return emailPattern.test(email);
}

console.log("someone.somewhere@iba-suk.edu.pk: ", validateEmail("someone.somewhere@iba-suk.edu.pk"));
console.log("nobody.nowhere@gmail.com: ", validateEmail("nobody.nowhere@gmail.com"));