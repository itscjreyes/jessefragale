import React from 'react';

import './about.styles.scss';

function About({image, content}) {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="img-wrapper">
          <img src={image} alt="Jesse Fragale"/>
        </div>
        <div className="content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default About;