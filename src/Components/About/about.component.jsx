import React from 'react';

import './about.styles.scss';

function About({image, content}) {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="img-wrapper">
          <img src={image} alt="Jesse Fragale"/>
        </div>
        <div className="content-wrapper">
          <h2>About Me</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}

export default About;