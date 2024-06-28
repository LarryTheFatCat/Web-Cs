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
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (regexUsername.test(username.value) == true && regexPassword.test(password.value) == true) {
        // @todo: transition to main webpage showing classrooms && implement admin feature soon™
        usernameLabel.classList.remove('input-error');
        usernameLabel.classList.add('input-primary');

        passwordLabel.classList.remove('input-error');
        passwordLabel.classList.add('input-primary');
        return location.href = "/src/classes.html"
    } else if (regexUsername.test(username.value) == false && regexPassword.test(password.value) == false) {

        usernameLabel.classList.remove('input-primary');
        usernameLabel.classList.add('input-error');

        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');

        toolTip.classList.remove("hidden");

    } else if (regexUsername.test(username.value) == true && regexPassword.test(password.value) == false) {
        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');

        toolTip.classList.remove("hidden");
    } else if (regexUsername.test(username.value) == false && regexPassword.test(password.value) == true) {

        usernameLabel.classList.remove('input-primary');
        usernameLabel.classList.add('input-error');

        toolTip.classList.remove("hidden");
    }

    if(username.value == "TeacherAccessName" && password == "TeacherPassword") {
        // toggle teacher admin section, mainly create classroom popup and some permissions
    }
}

function checkSignUp() {
    let regexUsername = /^[a-zA-Z0-9]+$/;
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regexUsername.test(username.value) && regexPassword.test(password.value) == true) {
        // @todo: transition to main webpage showing classrooms && implement admin feature soon™
        usernameLabel.classList.remove('input-error');
        usernameLabel.classList.add('input-primary');

        passwordLabel.classList.remove('input-error');
        passwordLabel.classList.add('input-primary');
        return false
    }

    if (!regexUsername.test(username.value) && !regexPassword.test(password.value)) {
        usernameLabel.classList.remove('input-primary');
        usernameLabel.classList.add('input-error');

        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');
        return false;
    }
    if (regexUsername.test(username.value) == true && !regexPassword.test(password.value)) {
        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');
        return false;
    }
    if (!regexUsername.test(username.value) && regexPassword.test(password.value) == true) {
        usernameLabel.classList.remove('input-primary');
        usernameLabel.classList.add('input-error');
        return false;
    }
    if(!regexEmail.test(email.value)) {
        emailLabel.classList.remove('input-primary');
        emailLabel.classList.add('input-error');
        return false;
    }
    if(!regexPassword.test(userPasswordConfirm.value)) {
        userPasswordConfirmLabel.classList.remove('input-primary');
        userPasswordConfirmLabel.classList.add('input-error');
        return false;
    }
    if(password.value != userPasswordConfirm.value) {
        passwordLabel.classList.remove('input-primary');
        passwordLabel.classList.add('input-error');
        userPasswordConfirmLabel.classList.remove('input-primary');
        userPasswordConfirmLabel.classList.add('input-error');
        return false;
    }
}

