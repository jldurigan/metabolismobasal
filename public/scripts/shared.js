var dropdownList = document.querySelector('.dropdown-list');
var customDropdown = document.querySelector('.custom-dropdown');
var dropdownHeader = document.querySelector('.dropdown-header');
var lanBarTop = document.querySelector('.lan-bar-top');
var overlay = document.querySelector('.overlay');

document.addEventListener("click", function (event) {
  if (dropdownList.style.display === 'block' && !dropdownHeader.contains(event.target)) {
    toggleDropdown();
  }
});

dropdownHeader.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (dropdownList.style.display === 'block') {
    dropdownList.style.display = 'none';
    overlay.style.display = 'none';
    lanBarTop.classList.remove('open');
    customDropdown.classList.remove('open');
  } else {
    dropdownList.style.display = 'block';
    overlay.style.display = 'block';
    lanBarTop.classList.add('open');
    customDropdown.classList.add('open');
  }
}