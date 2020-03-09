import React from 'react';

import './footer.styles.scss';

function Footer(){
  return (
    <footer>
      <div className="container">
        <p>© {(new Date().getFullYear())} All Rights Reserved Jesse Fragale</p>
      </div>
    </footer>
  )
}

export default Footer;