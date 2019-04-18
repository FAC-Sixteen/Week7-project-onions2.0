const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const errorMessage = document.querySelector('#error-message');
const button = document.querySelector('#submitButton');

// check username
const checkUsername = () => {
    if (!usernameInput.checkValidity()) {
        errorMessage.textContent = "Max 20 alphanumeric characters";
    } else if (usernameInput.checkValidity()){
        errorMessage.textContent = "";
    }
}
usernameInput.addEventListener('input', checkUsername);

//check password 