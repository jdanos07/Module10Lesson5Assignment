// Task 1
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
    const userInput = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
    };

    console.log('User Input:', userInput);

// Task 2
    if (validateForm(userInput)) {
        alert('Form submitted successfully!');
        form.reset(); // Clear the form
    }
});
// Task 3
function validateForm(userInput) {
    let isValid = true;

    if (!userInput.name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    if (!userInput.email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput.email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    if (!userInput.message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}
});



