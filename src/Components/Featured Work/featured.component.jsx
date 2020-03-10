import React from 'react';

import '../Articles/articles.styles.scss';

const Featured = ({ key, logo, title, description, link, linkText }) => (
  <a href={link} key={key}>
    <img src={logo} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{linkText}</span>
  </a>
)

export default Featured;