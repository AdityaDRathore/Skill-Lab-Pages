function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    
    if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }
    
    alert('Subscription successful!');
    return true;
}

document.querySelector('.newsletter-subscription').addEventListener('submit', validateForm);