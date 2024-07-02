const darkModeCheckBox = document.getElementById("theme_switcher_checkbox");
const isDark = JSON.parse(localStorage.getItem('isdark'));

/**
 * Saves for theme only
 */

darkModeCheckBox.checked = isDark;

darkModeCheckBox.addEventListener('change', function() {
  localStorage.setItem('isdark', JSON.stringify(darkModeCheckBox.checked));
});

