const darkModeCheckBox = document.getElementById("theme_switcher_checkbox");
const isDark = JSON.parse(localStorage.getItem('isdark'));
darkModeCheckBox.checked = isDark;

// saves to localStorage, I want to reduce cluster that's why it's in the folder lol

darkModeCheckBox.addEventListener('change', function() {
  localStorage.setItem('isdark', JSON.stringify(darkModeCheckBox.checked));
});
