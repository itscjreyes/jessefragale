import React from 'react';
import { ReactComponent as Instagram } from '../../Assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../Assets/icons/twitter.svg';
import { ReactComponent as YouTube } from '../../Assets/icons/youtube.svg';
import { ReactComponent as LinkedIn } from '../../Assets/icons/linkedin.svg';

import './social.styles.scss';

function Social(){
  return (
    <div className="social-group">
      <a href="https://www.instagram.com/jfragalz" title="Instagram"><Instagram /></a>
      <a href="https://www.linkedin.com/in/jessefragale" title="LinkedIn"><LinkedIn /></a>
      <a href="https://twitter.com/jesse_fragale" title="Twitter"><Twitter /></a>
      <a href="https://www.youtube.com/user/JesseFragale/" title="YouTube"><YouTube /></a>
    </div>
  )
}

export default Social;