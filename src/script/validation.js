const username = document.getElementById("user_username");
const password = document.getElementById("user_password");
const email = document.getElementById("user_email");
const toolTip = document.getElementById("tooltip");

const usernameLabel = document.getElementById("user_label");
const passwordLabel = document.getElementById("password_label");
const emailLabel = document.getElementById("email_label");

const userPasswordConfirm = document.getElementById("user_password_confirm");
const userPasswordConfirmLabel = document.getElementById("password_label_confirm");

function checkLogin() {
    let regexUsername = /^[0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    // if any are wrong, return whole thing as wrong
    // else, redirect to classes
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
        return location.href = "/src/classes.html";
    }
}

function checkSignUp() {
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // if any are wrong, return whole thing as wrong
    // else, redirect to classes
    if (!regexUsername.test(username.value)) {
        usernameLabel.classList.remove("input-primary");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.remove("input-primary");
        passwordLabel.classList.add("input-error");
        return;
    } else if (!regexPassword.test(password.value)) {
        usernameLabel.classList.remove("input-primary");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.remove("input-primary");
        passwordLabel.classList.add("input-error");
        return;
    } else if (!regexEmail.test(email.value)) {
        usernameLabel.classList.remove("input-primary");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.remove("input-primary");
        passwordLabel.classList.add("input-error");
        emailLabel.classList.remove("input-primary");
        emailLabel.classList.add("input-error");
        return;
    } else {
        usernameLabel.classList.remove("input-error");
        usernameLabel.classList.add("input-primary");

        passwordLabel.classList.remove("input-error");
        passwordLabel.classList.add("input-primary");

        emailLabel.classList.remove("input-error")
        emailLabel.classList.add("input-primary");
        return location.href = "/src/classes.html"
    }
}

