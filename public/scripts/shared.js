function toggleDropdown() {
    var dropdownList = document.querySelector('.dropdown-list');
    var customDropdown = document.querySelector('.custom-dropdown');
    if (dropdownList.style.display === 'block') {
      dropdownList.style.display = 'none';
      customDropdown.classList.remove('open');
    } else {
      dropdownList.style.display = 'block';
      customDropdown.classList.add('open');
    }
  }

  function selectOption(option) {
    var selectedOption = option.textContent;
    var dropdownHeader = document.querySelector('.dropdown-header');
    dropdownHeader.textContent = selectedOption;
    var dropdownList = document.querySelector('.dropdown-list');
    dropdownList.style.display = 'none';
    var customDropdown = document.querySelector('.custom-dropdown');
    customDropdown.classList.remove('open');
  }