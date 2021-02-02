'use strict';
const nav = document.querySelector('.nav');
console.log(nav);
const handleHover = function (e) {
    if (e.target.classList.contains('navLink')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.navLink');
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
     
    }
  };
  
  // Passing "argument" into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));

