import React from 'react';
import { ReactComponent as Logo } from '../../Assets/icons/jessefragale.svg';

import './header.styles.scss';

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function() {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function headerScroll() {
  window.onscroll = function() {
    const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    const header = document.querySelector('header');
    
    if (top === 0) {
      header.classList.remove('sticky');
    } else {
      header.classList.add('sticky');
    }
  };
}
  
function Header(){
  scrollTo();
  headerScroll();

  return (
    <header>
      <div className="container">
        <button className="logo" onClick={scrollToTop}><Logo /></button>
        <nav>
          <ul>
            <li><button href="#about" className="scroll">About</button></li>
            <li><button href="#media" className="scroll">Media</button></li>
            <li><button href="#contact" className="scroll">Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;