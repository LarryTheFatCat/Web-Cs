const username = document.getElementById("user_username");
const password = document.getElementById("user_password");
const email = document.getElementById("user_email");
const toolTip = document.getElementById("tooltip");

const usernameLabel = document.getElementById("user_label");
const passwordLabel = document.getElementById("password_label");
const emailLabel = document.getElementById("email_label");

const userPasswordConfirm = document.getElementById("user_password_confirm");
const userPasswordConfirmLabel = document.getElementById("password_label_confirm");
const name = document.getElementById("user_name");
const nameLabel = document.getElementById("name_label");

function checkLogin() {
    let regexUsername = /^[0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    // if any are wrong, return whole thing as wrong
    if (!regexUsername.test(username.value)) {
        usernameLabel.classList.remove("input-primary");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.remove("input-primary");
        passwordLabel.classList.add("input-error");
        toolTip.classList.remove("hidden");
        return;
        
    } else if (!regexPassword.test(password.value)) {
        usernameLabel.classList.remove("input-primary");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.remove("input-primary");
        passwordLabel.classList.add("input-error");
        toolTip.classList.remove("hidden");
        return;

    } else {
        usernameLabel.classList.remove("input-error");
        usernameLabel.classList.add("input-primary");
        passwordLabel.classList.remove("input-error");
        passwordLabel.classList.add("input-primary");
        toolTip.classList.add("hidden");
        sessionStorage.setItem("username", username.value);
        return location.href = "/src/classes.html";

    }
}

function checkSignUp() {
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regexEmail.test(email.value)) {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
        nameLabel.classList.add("input-error");
        userPasswordConfirmLabel.classList.add("input-error");
        return;

    } else if (!regexUsername.test(username.value)) {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
        nameLabel.classList.add("input-error");
        userPasswordConfirmLabel.classList.add("input-error");
        return;

    } else if (!regexPassword.test(password.value)) {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
        nameLabel.classList.add("input-error");
        userPasswordConfirmLabel.classList.add("input-error");
        return;

    } else if (name.value == "") {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
        nameLabel.classList.add("input-error");
        userPasswordConfirmLabel.classList.add("input-error");
        return;

    } else if (password.value != userPasswordConfirm.value) {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
        nameLabel.classList.add("input-error");
        userPasswordConfirmLabel.classList.add("input-error");
        return;

    } else {
        /**
         * On success, just redirect to login for "security purposes"... lol
         */
        emailLabel.classList.remove("input-error");
        usernameLabel.classList.remove("input-error");
        passwordLabel.classList.remove("input-error");
        nameLabel.classList.remove("input-error");
        userPasswordConfirmLabel.classList.remove("input-error");
        sessionStorage.setItem("name", name.value);
        return location.href = "/src/sub-pages/login.html"

    }
}

