const username = document.getElementById("user_username");
const password = document.getElementById("user_password");
const toolTip = document.getElementById("tooltip");

const usernameLabel = document.getElementById("user_label");
const passwordLabel = document.getElementById("password_label")
function checkLogin() {
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-=_+{}[\]:;"'<>,.?/]).{8,16}$/;

    if (regexUsername.test(username.value) && regexPassword.test(password.value) == true) {
        // do something here in future
    } else if (regexUsername.test(username.value) == false && regexPassword.test(password.value) == false) {

        usernameLabel.classList.remove('input-primary');
        usernameLabel.classList.add('input-error');

        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');

        toolTip.classList.remove("hidden");

    }
}