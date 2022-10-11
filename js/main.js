(function () {
  'use strict';

  let navBar = document.querySelector('.navbar');

  window.onload = function () {
    if (this.scrollY > 0) {
      navBar.classList.add('show');
    } else {
      navBar.classList.remove('show');
    }
  };

  window.onscroll = function () {
    if (this.scrollY > 0) {
      navBar.classList.add('show');
    } else {
      navBar.classList.remove('show');
    }
  };
})();
