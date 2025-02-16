function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let valid = true;

    if (name === "") {
        alert("Name must be filled out");
        valid = false;
    }

    if (email === "" || !email.match(emailPattern)) {
        alert("Please enter a valid email address");
        valid = false;
    }

    if (message === "") {
        alert("Message must be filled out");
        valid = false;
    }

    return valid;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});