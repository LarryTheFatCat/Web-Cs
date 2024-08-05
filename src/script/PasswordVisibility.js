const icon = document.getElementById("icon_visibility");
const confirmIcon = document.getElementById("confirm_icon_visibility");
const passwordInput = document.getElementById("user_password");
const confirmPasswordInput = document.getElementById("user_password_confirm");

// if clicked, set icon from slashed to just eye. Vice Versa
icon.addEventListener("click", function () {
    // if password, set to text, else set password
    let passwordType = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", passwordType);
    this.classList.toggle("bi-eye")
});
confirmIcon.addEventListener("click", function () {
    let confirmPasswordType = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordInput.setAttribute("type", confirmPasswordType);
    this.classList.toggle("bi-eye");
});