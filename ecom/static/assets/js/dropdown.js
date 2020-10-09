class Dropdown {
  constructor() {
    this.dropdowns = document.querySelectorAll('.a-dropdown');

    if (this.dropdowns.length <= 0) return false;

    this.init();
  }

  init() {
    const dropdowns = Array.from(this.dropdowns);
    dropdowns.forEach(dropdown => {
      this.initDropdown(dropdown)
    })
  }

  initDropdown(dropdown) {
    const selectElement = dropdown.getElementsByTagName("select")[0];
    const options = Array.from(selectElement.options);

    /* For each element, create a new DIV that will act as the selected item: */
    const selectedOption = this.createElement('div', 'a-dropdown__selected', selectElement.options[selectElement.selectedIndex].innerHTML);
    dropdown.appendChild(selectedOption);

    /* For each element, create a new DIV that will contain the option list: */
    const optionsElement = document.createElement("div");
    optionsElement.setAttribute("class", "a-dropdown__items -hidden");

    options.forEach(option => {
      const optionElement = this.createElement('div', 'a-dropdown__item', option.innerHTML);

      if (selectedOption.innerHTML == optionElement.innerHTML) {
        optionElement.classList.add('-selected')
      }

      optionElement.addEventListener("click", () => {
        this.handleClickedOption(dropdown, options, optionElement, selectedOption);
      });

      optionsElement.appendChild(optionElement);
    });

    dropdown.appendChild(optionsElement);

    selectedOption.addEventListener("click", (e) => {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      this.closeAllSelect(dropdown);
      optionsElement.classList.toggle("-hidden");
      dropdown.classList.toggle("-isOpened");
    });

    // /* If the user clicks anywhere outside the select box,
    // then close all select boxes: */
    document.addEventListener("click", this.closeAllSelect);
  }

  createElement(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.innerHTML = content;

    return element
  }

  handleClickedOption(dropdown, options, optionElement, selectedOption) {
    const items = dropdown.querySelectorAll('.a-dropdown__item');
    /* When an item is clicked, update the original select box,
    and the selected item: */
    options.forEach(option => {
      if (optionElement.innerHTML == option.innerHTML) {
        selectedOption.innerHTML = optionElement.innerHTML;
        this.handleClass(items, 'remove', '-selected')
        optionElement.classList.add("-selected");
      }
    });
    selectedOption.click();
  }

  closeAllSelect(currentDropdown) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    if (this.dropdowns) {
      const dropdowns = Array.from(this.dropdowns);
      dropdowns.forEach(dropdown => {
        if (dropdown != currentDropdown) {
          dropdown.classList.remove('-isOpened')
          dropdown.querySelector('.a-dropdown__items').classList.add('-hidden')
        }
      })
    }
  }
  
  handleClass (array, operator, className) {
    array.forEach(item => {
      operator == 'add' ? item.classList.add(className) : item.classList.remove(className)
    })
  }
}

new Dropdown();