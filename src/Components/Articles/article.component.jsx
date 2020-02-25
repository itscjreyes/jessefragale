import React from 'react';

const Article = ({ key, title, description, link }) => (
  <a href={link} key={key}>
    <h3>{title}</h3>
    <p>{description}</p>
    <span>Read Article</span>
  </a>
)

export default Article;