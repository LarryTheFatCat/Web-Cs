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

/**
 *  @function checkLogin() - Performs a basic check, if 1 wrong, return all wrong, all right, return redirect to classroom.
 * @returns - Returns page redirect of the validation is correct
 */
function checkLogin() {
    let regexUsername = /^[0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!regexUsername.test(username.value) || !regexPassword.test(password.value)) {
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

        toolTip.classList.remove("hidden");
        toolTip.classList.add("hidden");
        return location.href = "/src/classes.html";
    }
}

/**
 * @function checkSignUp() - User input function (both depicted off signup.html && login.html), checks and creates an account for user.
 * @returns - If 1 wrong, return all wrong. Else, redirect to login page **SEE JSDOCS FOR LOGIN INFO**
 */
function checkSignUp() {
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regexEmail.test(email.value) || !regexUsername.test(username.value) || !regexPassword.test(password.value) || password.value !== userPasswordConfirm.value) {
        emailLabel.classList.add("input-error");
        usernameLabel.classList.add("input-error");
        passwordLabel.classList.add("input-error");
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

