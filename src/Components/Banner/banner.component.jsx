import React from 'react';
import image from '../../Assets/images/jesse-fragale.png';
import Social from '../Social/social.component';

import './banner.styles.scss';

function Banner(){
  return (
    <div className="banner">
      <div className="container">
        <div className="content-wrapper">
          <h1>Jesse Fragale</h1>
          <h2>Real Estate Investor</h2>
          <Social />
        </div>
        <div className="img-wrapper">
          <img src={image} alt="Jesse Fragale"/>
        </div>
      </div>
    </div>
  )
}

export default Banner;